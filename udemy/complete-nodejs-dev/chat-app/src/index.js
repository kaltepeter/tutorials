const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
} = require("./utils/users");

const {
  generateMessage,
  generateLocationMessage
} = require("./utils/messages");

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "..", "public");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));

io.on("connection", socket => {
  console.log("New websocket connection");

  socket.on("join", (options, cb) => {
    const { error, user } = addUser({ id: socket.id, ...options });

    if (error) {
      return cb(error);
    }

    socket.join(user.room);

    socket.emit("message", generateMessage("Welcome!"));
    socket.broadcast
      .to(user.room)
      .emit("message", generateMessage(`${user.username} has joined!`));

    cb();

    // socket.emit, io.emit, socket.broadcast.emit
    // io.to.emit, socket.broadcast.to.emit
  });

  socket.on("sendMessage", (message, cb) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return cb("Profanity is not allowed.");
    }
    io.to("test").emit("message", generateMessage(message));
    cb();
  });

  socket.on("sendLocation", ({ latitude, longitude }, cb) => {
    io.emit("locationMessage", generateLocationMessage(latitude, longitude));
    cb();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage(`${user.username} has left`)
      );
    }
  });
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

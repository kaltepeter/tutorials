const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");

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

  socket.on("join", ({ username, room }) => {
    socket.join(room);

    socket.emit("message", generateMessage("Welcome!"));
    socket.broadcast
      .to(room)
      .emit("message", generateMessage(`${username} has joined!`));

    // socket.emit, io.emit, socket.broadcast.emit
    // io.to.emit, socket.broadcast.to.emit
  });

  socket.on("sendMessage", (message, cb) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return cb("Profanity is not allowed.");
    }
    io.emit("message", generateMessage(message));
    cb();
  });

  socket.on("sendLocation", ({ latitude, longitude }, cb) => {
    io.emit("locationMessage", generateLocationMessage(latitude, longitude));
    cb();
  });

  socket.on("disconnect", () => {
    io.emit("message", generateMessage(`A user has left`));
  });
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

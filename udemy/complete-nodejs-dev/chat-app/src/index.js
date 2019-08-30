const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "..", "public");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));

io.on("connection", socket => {
  console.log("New websocket connection");

  socket.emit("message", "Welcome!");
  socket.broadcast.emit("message", `A new user has joined!`);

  socket.on("sendMessage", (message, cb) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return cb("Profanity is not allowed.");
    }
    io.emit("message", message);
    cb();
  });

  socket.on("sendLocation", ({ latitude, longitude }, cb) => {
    io.emit(
      "locationMessage",
      `https://www.google.com/maps?q=${latitude},${longitude}`
    );
    cb();
  });

  socket.on("disconnect", () => {
    io.emit("message", `A user has left`);
  });
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

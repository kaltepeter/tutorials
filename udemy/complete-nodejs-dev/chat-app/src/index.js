const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

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

  socket.on("sendMessage", message => {
    io.emit("message", message);
  });

  socket.on("sendLocation", ({ latitude, longitude }) => {
    io.emit(
      "message",
      `https://www.google.com/maps?q=${latitude},${longitude}`
    );
  });

  socket.on("disconnect", () => {
    io.emit("message", `A user has left`);
  });
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

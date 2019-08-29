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

let count = 0;

io.on("connection", socket => {
  console.log("New websocket connection");
  socket.emit("countUpdated", count);

  socket.on("increment", () => {
    count++;
    // socket.emit("countUpdated", count);
    io.emit("countUpdated", count);
  });
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

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

io.on("connection", () => {
  console.log("New websocket connection");
});

server.listen(port, () => {
  console.log(`Chat app started on: http://localhost:${port}`);
});

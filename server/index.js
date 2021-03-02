const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 8080;
//const ENV = process.env.ENV || "development";

const router = require("./router");

const app = express();
const server = http.createServer(app);
//the client side is currently run on PORT 3002, change origin if needed
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("We have a new connection!!");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User had left!!");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

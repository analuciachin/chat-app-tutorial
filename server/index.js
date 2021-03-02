const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 8080;
//const ENV = process.env.ENV || "development";

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

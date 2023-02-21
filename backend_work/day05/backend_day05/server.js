const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
// 소켓io
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
process.env.PORT = 3000;
app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

/////// router -------
router.route("/home").get((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>길동이의 홈페이지</h1>");
  res.end();
});

const clientSocketMap = {};
let nowPlayer = null;
const problems = [
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
  "원숭이",
  "닭",
  "개",
  "돼지",
];
let answer = null;
// 클라이언트가 socket으로 접속하면 실행
io.sockets.on("connection", (socket) => {
  console.log("소켓으로 접속 됨.");

  socket.on("linesend", function (data) {
    if (nowPlayer === null) {
      socket.emit("error", { error: "아직 게임이 시작되지 않았습니다." });
    } else if (nowPlayer !== data.userId) {
      socket.emit("error", { error: "다른 플레이어의 차례입니다." });
    } else {
      console.log(data);
      socket.broadcast.emit("linesend_tocllinet", data);
    }
  });

  socket.on("disconnect", function () {
    console.log("/chat 클라이언트 접속이 해제 됨.");
  });
  socket.on("login", function (data) {
    console.log(socket.id);
    data.socketId = socket.id;
    clientSocketMap[data.userId] = data;
    socket.emit("welcome", "환영합니다.");
  });
  socket.on("gameStart", function (data) {
    console.log(nowPlayer);
    if (nowPlayer === null) {
      nowPlayer = data.userId;
      console.log("nowPlayer", nowPlayer);
      answer = problems[Math.floor(Math.random() * problems.length)];
      socket.emit("gameStart", {
        answer: answer,
      });
      io.sockets.emit("broadcast", {
        message: `------${nowPlayer}님의 차례입니다------`,
      });
    } else {
      let error = "이미 게임이 시작되었습니다.";
      socket.emit("error", { error: error });
    }
  });
  socket.on("send", function (data) {
    if (data.recepient === "All") {
      io.sockets.emit("send message", data);
      if (data.message === answer) {
        // 정답처리, 턴바꿔주고, nowPlayer 수정
        console.log(data);
        console.log(clientSocketMap);
        let targetSocketId = clientSocketMap[nowPlayer].socketId;
        let targetSocket = io.sockets.sockets.get(targetSocketId);
        targetSocket.emit("turnEnd", {});
        nowPlayer = data.sender;
        console.log(nowPlayer);
        socket.emit("success", {});
        io.sockets.emit("broadcast", {
          message: `------정답입니다------<br/>------${nowPlayer}님의 차례입니다------`,
        });
        answer = problems[Math.floor(Math.random() * problems.length)];
        socket.emit("gameStart", {
          answer: answer,
        });
      }
      return;
    }
    let targetSocketId = clientSocketMap[data.recepient].socketId;
    let targetSocket = io.sockets.sockets.get(targetSocketId);
    console.log(data);
    console.log(clientSocketMap);
    targetSocket.emit("send message", data);
  });
});

app.use("/", router);
/////// error handler -----
var expressErrorHandler = require("express-error-handler");
var errorHandler = expressErrorHandler({
  static: {
    404: "./public/404.html",
  },
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + app.get("port"));
});

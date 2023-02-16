const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

// view engin - 템플릿엔진
app.set("views", __dirname + "/views"); // prefix, 두번째 인자 경로
app.set("view engine", "ejs"); // suffix

// body-parser 미들웨어 설정 - express의 설정으로 변경
// body-parser 미들웨어 사용을 위한 부분
// POST 요청 방식에서 body의 파라미터 사용 가능
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded

process.env.PORT = 3000;
//삼항연산자
app.set("port", process.env.PORT || 3000);
app.get("/home", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>길동이의 홈페이지</h1>");
  res.end(); // end()를 안하면 무한루프 발생
});

const carList = [
  { no: 1, title: "SONATA", price: 3000, company: "HYUNDAI", year: 2022 },
  { no: 2, title: "GRANDEUR", price: 4000, company: "HYUNDAI", year: 2019 },
  { no: 3, title: "K9", price: 7000, company: "KIA", year: 2020 },
];

app.get("/car", (req, res) => {
  // req.app.reder(뷰파일, data, 콜백함수(err, data))
  const userName = "Sehyeon";
  req.app.render("car", { userName, carList }, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});

const todoList = [
  { idx: 1, title: "hello", done: false },
  { idx: 2, title: "world", done: false },
  { idx: 3, title: "node공부", done: false },
];

app.get("/todoList", (req, res) => {
  console.log("GET - /todoList");
  req.app.render("todoList", { todoList }, (err, data) => {
    res.end(data);
  });
});

// POST 요청일때 처리
app.post("/todoList", (req, res) => {
  console.log("POST - /todoList");
  // post방식에서 파라미터 받기 - bodyparser 미들웨어 사용
  var newItem = req.body.newItem;
  console.log("new Item : " + newItem);

  // 저장 후 목록 갱신...
  res.redirect("/todoList");
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중... http:/localhost:" + app.get("port"));
});

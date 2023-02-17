const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

app.set("views", __dirname + "/views"); // prefix - 풀더
app.set("view engine", "ejs"); // suffix - 확장자

process.env.PORT = 3000;
app.set("port", process.env.PORT || 3001);

// bodyParser 미들웨어 설정 부분.
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded

//static 미들웨어 설정 -express에 내장
app.use(express.static(__dirname + "/public"));

let todoList = [
  { idx: 1, title: "hello", done: false },
  { idx: 2, title: "world", done: false },
  { idx: 3, title: "node공부", done: false },
];

let seqTodoList = 4;

app.get("/home", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>길동이의 홈페이지</h1>");
  res.end(); // end() 안하면 무한루프 발생.
});

// 로그인 처리
app.post("/login", (req, res) => {
  // post 방식의 요청 시에는 body에 파라미터가 담겨서 전달된다.
  let id = req.body.id;
  let passwd = req.body.passwd;
  
  // res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  // 로그인 처리 후 index.html페이지 이동
  res.redirect("/");
});

app.get("/todoList", (req, res) => {
  req.app.render("todoList", { todoList: todoList }, (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

app.post("/todoList", (req, res) => {
  console.log("POST - /todoList");
  var newItem = req.body.newItem; // bodyParser 설정
  todoList.push({ idx: seqTodoList++, title: newItem, done: false });
  res.redirect("/todoList");
});

app.get("/todoList/delete", (req, res) => {
  console.log("GET - /todoList/delete");
  let idx = Number(req.query.idx);
  todoList = todoList.filter((item, index) => {
    return idx !== item.idx;
  });
  res.redirect("/todoList");
});

app.get("/todoList/update", (req, res) => {
  console.log("GET - /todoList/update");
  const idx = req.query.idx;
  const title = req.query.title;
  const done = req.query.done === "true" ? true : false;
  console.log(done);
  const targetIdx = todoList.findIndex((item, index) => {
    return idx == item.idx;
  });
  if (targetIdx !== -1) {
    todoList[targetIdx].title = title ? title : todoList[targetIdx].title;
    todoList[targetIdx].done =
      typeof done === "boolean" ? done : todoList[targetIdx].done;
  }
  console.log("AFTER", todoList[targetIdx]);
  res.redirect("/todoList");
});

app.get("/json/todoList", (req, res) => {
  // res.end() - 무자열 인자만 처리
  // res.send() - 수식 or 객체만 처리 => 결과는 JSON 문자열
  res.send({ todoList }); // {todoList :todoList}
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + app.get("port"));
});

// nodejs에서 한 약속
// 디폴트 페이지

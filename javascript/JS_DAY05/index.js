const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

// 크로스 오리진 문제 해결
app.use(cors());

app.use(express.static("public"));

// npm install --save ejs
app.set("view engine", "ejs");
app.set("views", "./template");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const saramList = [
  {
    no: 1,
    name: "kim",
    email: "kim@saram.com",
    phone: "010-1111-1111",
  },
  {
    no: 2,
    name: "lee",
    email: "lee@saram.com",
    phone: "010-1111-2222",
  },
  {
    no: 3,
    name: "park",
    email: "park@saram.com",
    phone: "010-1111-3333",
  },
  {
    no: 4,
    name: "kang",
    email: "kang@saram.com",
    phone: "010-1111-4444",
  },
  {
    no: 5,
    name: "choi",
    email: "choi@saram.com",
    phone: "010-1111-5555",
  },
  {
    no: 6,
    name: "test",
    email: "test@saram.com",
    phone: "010-1111-6666",
  },
];

app.get("/saram/list", (req, res) => {
  res.send({ saramList: saramList }); // {saramList : saramList}
});
app.post("/saram/list", (req, res) => {
  const newSaram = req.body;
  newSaram.no = saramList.length + 1;
  saramList.push(newSaram);
  console.log(saramList);
});

app.get("/", (req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  //   res.write("<h1>환영합니다!</h1>");
  //   res.write("<ul><li><a href='/html/jsDay05Ex01_1.html'>ex01_1</a></li>");
  //   res.write("<li><a href='/home'>home</a></li></ul>");
  //   res.end();
  res.redirect("/main.html"); // res.end() 대신 / 다른 페이지로 갱신 시킨다.
});

app.get("/home", (req, res) => {
  // home.ejs 템플릿이 보여 지도록 한다.
  // req.app.render(ejs파일명, 데이터객체, 콜백함수);
  // 콜백함수의 첫번째는 err객체
  var testArr = [
    { no: 1, name: "홍길동", age: 12 },
    { no: 2, name: "김길동", age: 15 },
    { no: 3, name: "박길동", age: 13 },
    { no: 4, name: "최길동", age: 14 },
  ];
  req.app.render("home", { testArr }, (err, html) => {
    if (err != null) {
      console.log("오류 발생!");
      res.end();
    } else {
      res.end(html);
    }
  });
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 : localhost:3000");
});

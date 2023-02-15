const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  console.dir(request.url);
  response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

  if (request.url === "/profile") {
    response.write("<h2>profile</h2>");
    response.write("<a href='/'>홈으로 이동</a>");
  }
  if (request.url === "/") {
    response.write("<h2>길동이의 홈페이지</h2>");
    response.write("<a href='/profile'> 이동</a>");
  }

  response.end();
});

server.listen(3000, () => {
  console.log("서버 실행 중...");
});

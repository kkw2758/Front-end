const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer();
server.listen(3000, () => {
  console.log("서버 실행 중...");
});

server.on("request", (req, res) => {
  var data = fs.readFileSync("./package.json", "utf-8");
  console.log(data);
  res.end(data);
});

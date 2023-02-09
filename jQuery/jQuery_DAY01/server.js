const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const formidable = require("formidable");
const fs = require("fs");

// app.set(key, value) - setAttribute
// app.get(key); - getAttribute의 용도
// app.get(path, callback) - 서버의 doGet 역할
// app.post(path, callback) - 서버의 doPost 역할

app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/template");
// app.set("views", "./template");

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
  });
  res.write("<H1>Hello world</H1>");
  res.end();
});

app.post("/saram/input", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write("<h2>upload file received!</h2>");
    res.end();
  });

  // on은 이벤트를 걸어줌
  // IncomingForm, res.end() 이벤트를 받아온다
  // 이벤트가 발생한곳이 this가됨
  form.on("end", function () {
    // console.log("this", this);
    // console.log(this.openedFiles);
    // console.log("파일 갯수 : ", this.openedFiles.length);
    for (var i = 0; i < this.openedFiles.length; i++) {
      let file = this.openedFiles[i];
      var oldpath = file.filepath;
      var newpath = "./public/upload/" + file.originalFilename;
      console.log(oldpath);
      console.log(newpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
      });
    }
  });
});

// console.dir(app);
// http와 express의 결합 - 같은 port를 공유한다.
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("서버 실행 중 - http://localhost:" + app.get("port"));
});

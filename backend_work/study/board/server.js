const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();

// 이미지처리
const formidable = require("formidable");
const fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

process.env.PORT = 3000;
app.set("port", process.env.PORT || 3001);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

router.route("/").get((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>세현이의 두근두근 홈페이지</h1>");
  res.end();
});

router.route("/humanInfoMangement").get((req, res) => {
  console.log("GET - /humanInfoMangement");
  req.app.render("humanInfoMangement", {}, (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

router.route("/append").post((req, res) => {
  /*
  console.log("POST - /append");
  const form = new formidable.IncomingForm();
  console.log(req.body);
  form.parse(req, function (err, fields, files) {
    console.log("DFSDFAGAFGA");
    var oldpath = files.photo.filepath;
    var newpath = "./public/images/" + files.photo.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write("File uploaded and moved!");
      res.end();
    });
  });*/
  // form-data 파싱을 위한 form 객체 생성
  const form = new formidable.IncomingForm();
  console.dir(form);
  form.parse(req, function (err, fields, files) {
    console.log(files);
    var oldpath = files.file.path;
    var newpath = "./public/images/" + files.photo.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write("File uploaded and moved!");
      res.end();
    });
  });
});

app.use("/", router);

// error handler
// const expressErrorHandler = require("express-error-handler");
// const errorHandler = expressErrorHandler({
//   static: {
//     404: "./public/404.html",
//   },
// });

// app.use(expressErrorHandler.httpError(404));
// app.use(errorHandler);

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + app.get("port"));
});

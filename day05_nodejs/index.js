const express = require("express");
const app = express();

//public을 외부에서 접속 할 수 있도록 static 설정 하기.
app.use(express.static("public"));

const carList = [];
let cnt = 1;

app.get("/car/input", (req, res) => {
  //   let name = req.query.name;
  //   let price = req.query.price;
  //   let company = req.query.company;
  //   let year = req.query.year;
  //   console.log(name, price, company, year);
  //   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //   res.end(`${name}, ${price}, ${company}, ${year}`);
  //   console.log(req.query);
  //   // res.end() 문자열사용
  //   // res.send()  Object만 사용
  //   res.send(req.query);

  req.query.no = cnt++;
  console.log(req.query);
  carList.push(req.query);
  res.send(carList);
});

app.listen(3000, function () {
  console.log("노드 js 서버 실행중 : 3000");
});

// 숙제 1 : 오전에 하던 Slider 완성
// 숙제 2 : 무료템플릿 수정해서 firebse에 deploy
// 숙제 3 : 배운 내용 Note 정리해서 게시판에 올리기

// mongojs 모듈을 이용한 mongodb 연동
const mongojs = require("mongojs");

const db = mongojs("vehicle", ["car"]);
db.car.find(function (err, data) {
  console.log(data);
});

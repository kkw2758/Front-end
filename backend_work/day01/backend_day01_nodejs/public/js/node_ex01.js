console.log("Hello NODEJS");

// 먼저 실행
// task의 인자로 넘어감
function task(fullfilled, rejected) {
  console.log("task 실행 ...");
  setTimeout(function () {
    console.log("task 실행 끝!");
    // fullfilled("실행 결과 값");
    rejected("Error message!");
  }, 1000);
}

// 콜벡 들
// 결과가 넘어감
function fullfilled(result) {
  console.log("task 실행 후 >>> fullfilled 실행 >>> ", result);
}

function rejected(err) {
  console.log("task에서 rejected 실행 >>> rejected 실행 >>> ", err);
}

new Promise(task).then(fullfilled, rejected);

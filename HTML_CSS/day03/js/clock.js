var clock = document.querySelector("#clock");
console.log("시계");
function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML =
    `${hour < 10 ? `0${hour}` : hour}` +
    ":" +
    `${minutes < 10 ? `0${minutes}` : minutes}` +
    ":" +
    `${seconds < 10 ? `0${seconds}` : seconds}`;
}
var todoList = [
  { no: 1, todo: "친구 만나서 스터디 하기", done: false },
  { no: 2, todo: "주말 과제 하기", done: false },
  { no: 3, todo: "배운 내용 복습하기", done: false },
  { no: 4, todo: "자바 공부하기", done: false },
];

// 자주 사용하는 기능을 함수로 만듦
function drawList() {
  var newLis = "";
  for (var i = 0; i < todoList.length; i++) {
    var todo = todoList[i];
    var liTmpsStr = `<li>
            <input class="checkDone" data-no="${todo.no}" type="checkbox" ${
      todo.done ? "checked" : ""
    }>
            <span class="${todo.done ? "del" : ""}">${todo.todo}</span>
            <button class="delBtn" data-no="${
              todo.no
            }"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" style="width:20px;"alt="삭제"></button>
            </li>
            `;
    newLis += liTmpsStr;
  }
  document.querySelector("#listArea").innerHTML = newLis;
  var delBtnList = document.querySelectorAll(".delBtn");
  for (var i = 0; i < delBtnList.length; i++) {
    const k = i;
    delBtnList[i].onclick = function (event) {
      var no = parseInt(delBtnList[k].dataset.no);
      console.log(no);
      // var no = parseInt(event.target.dataset.no);
      for (var j = 0; j < todoList.length; j++) {
        if (todoList[j].no === no) {
          todoList.splice(j, 1);
        }
      }
      // delBtn의 onclick 이벤트에 다시 todoList를 그려주는것을 포함
      drawList();
    };
  }
  var checkboxList = document.querySelectorAll(".checkDone");
  for (var i = 0; i < todoList.length; i++) {
    checkboxList[i].onchange = function (event) {
      for (var j = 0; j < todoList.length; j++) {
        // console.log(event.target === this); true
        if (todoList[j].no === Number(this.dataset.no)) {
          todoList[j].done = !todoList[j].done;
          console.log("Done");
        }
      }
      drawList();
    };
  }
}
drawList();
var addBtn = document.querySelector("#addBtn");
var newWork = document.querySelector("#newWork");
addBtn.onclick = function (event) {
  var newWorkValue = newWork.value;
  var newTodo = {
    no: todoList.length + 1,
    todo: newWorkValue,
    done: false,
  };
  todoList.push(newTodo);
  drawList();
};
function init() {
  setInterval(getTime, 1000);
}
getTime();
init();

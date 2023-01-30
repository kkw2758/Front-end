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
      <input class="checkDone" data-no="${todo.no}" id="${
      todo.no
    }"type="checkbox" ${todo.done ? "checked" : ""}>
      <label for="${todo.no}" class="${todo.done ? "del" : ""}">${
      todo.todo
    }</label>
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
      var isDelete = confirm("정말 삭제 하시겠습니까?");
      if (isDelete === true) {
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
      }
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
  if (newWork.value === "") {
    alert("할 일을 입력해주세요!");
  } else {
    var newWorkValue = newWork.value;
    var newTodo = {
      no: todoList.length + 1,
      todo: newWorkValue,
      done: false,
    };
    todoList.push(newTodo);
    drawList();
    newWork.value = "";
  }
};

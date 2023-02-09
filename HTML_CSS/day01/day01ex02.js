// id 속성이 clickBtn인 요소의 DOM을 Select한다.
const clickBtn = document.getElementById("clickBtn");
const heading = document.getElementById("heading");
const counter = document.getElementById("counter");
const level = document.getElementById("level");

const colors = ["645CBB", "A084DC", "BFACE2", "EBC7E6"];

// flag에 따라서 id 가 heading인 태그의 backgroundColor를 다르게 지정된다.
let flag = false;
// clickBtn을 올바르게 가져왔는지 확인
console.log(clickBtn);
// clickBtn이 어떤 기능을 가지고 있는지 확인
console.dir(clickBtn);

clickBtn.onclick = function (event) {
  idx = Math.floor(Math.random() * colors.length);

  //  클릭이벤트가 발생하면 이벤트를 console 에 출력
  console.dir(event);
  console.dir(document);
  // color 값을 RGB 값으로 넣어줄 수 도 있음
  document.bgColor = colors[idx];
  document.title = "Hello";
  if (flag) {
    heading.style.backgroundColor = "red";
  } else {
    heading.style.backgroundColor = "black";
  }
  // 버튼이 클릭될때마다 flag값을 바꿔줌으로써 클릭할때마다 backgroundColor가 다르게 설정된다.
  flag = !flag;
};
// 문서의 거의 모든 요소가 객체가 될 수 있다.
// 함수를 변수에 참조 시킨다.
// 함수를 배열에도 담을 수 있다.
// 함수를 다른 함수의 인자로 사용. (callback 함수)

// function onClick(event) {
//   console.log(event.target);
// }
// clickBtn.addEventListener("click", onClick);

function onCounterClick() {
  // level.innerText의 초기값이 LV. 0 이므로 문자열을 자르는 함수인 substring을 이용했다.
  // "LV. "부분과 그 뒷부분을 나누어서 처리하였다.
  level.innerText =
    level.innerText.slice(0, 4) + (parseInt(level.innerText.slice(4)) + 1);
}
// clickBtn에 적용한 방법과 다른 방법으로 이벤트 리스너를 추가해 보았다.
counter.addEventListener("click", onCounterClick);

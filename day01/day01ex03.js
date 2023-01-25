// // 문서 내의 모든 li요소를 선택해서 liList가 참조 하도록 한다.
// // getElementsByClassName의 결과는 List이다.
// const olTag = document.getElementsByClassName("menu");
// const liList = olTag[0].getElementsByTagName("li");
// // liList의 모든 요소에 이벤트 핸들러 한번에 추가
// for (let i = 0; i < liList.length; i++) {
//   console.log(liList[i]);
//   liList[i].onclick = function (event) {
//     console.log(event.target.innerText);
//   };
// }

// const ulTag = document.getElementsByClassName("ulMenu");
// const uLiTag = ulTag[0].getElementsByTagName("li");
// for (let i = 0; i < uLiTag.length; i++) {
//   uLiTag[i].onclick = function (event) {
//     // console.log(event.target.innerText);
//     document.bgColor = event.target.innerText;
//   };
// }

// 강사님 소스코드
var ul = document.getElementsByTagName("ul")[0];
var colorNames = ul.getElementsByTagName("li");
for (var liTag of colorNames) {
  liTag.onclick = function (event) {
    //this는 객체 자신이다.
    // === 은 타입까지 비교한다
    // console.log(this);
    // 이벤트 헨들러에서 this는 이벤트가 발생한 객체 자신
    // console.log(this === event.target);
    var colorName = this.innerText;
    document.body.style.background = colorName;
  };
}

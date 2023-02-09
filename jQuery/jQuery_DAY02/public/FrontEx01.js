$.fn.myPlugin = function (data) {
  console.log("Data: " + data);
  //메서드 체인이 가능하도록 this를 반한
  $(this).text(data).css({ color: "green", "background-color": "pink" });
  return this;
};

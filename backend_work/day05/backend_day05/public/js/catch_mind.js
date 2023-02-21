$(function () {
  var ctx;
  var socket = null;
  var userId = null;
  var isMyTurn = false;
  ctx = $("#cv")[0].getContext("2d");

  // Canvas 사이즈 변경
  $("#cv").attr("width", "860px");
  $("#cv").attr("height", "640px");

  //라인 색상 굵기 설정
  var shape = {
    color: $("#penColor").val(),
    width: $("#penWidth").val(),
    change: function () {
      var color = $("#penColor").val();
      var width = $("#penWidth").val();
      console.log(color, width);
      shape.setShape(color, width);
    },
    setShape: function (color, width) {
      if (color != null) {
        this.color = color;
      }
      if (width != null) {
        this.width = width;
      }
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.width;
    },
  };

  // socket에 linesend 이벤트 발생 부분
  var msg = {
    line: {
      send: function (type, x, y) {
        socket.emit("linesend", {
          userId: userId,
          type: type,
          x: x,
          y: y,
          color: $("#penColor").val(),
          width: $("#penWidth").val(),
        });
      },
    },
  };

  // 그리기 부분에 대한 설정
  var draw = {
    drawing: false,
    start: function (e) {
      console.log(userId);
      if (userId === null) {
        alert("login first");
        return;
      }
      if (isMyTurn === false) {
        alert("다른 플레이어의 차례이거나 아직 게임을 시작하지 않았습니다.");
        return;
      }
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
      this.drawing = true;

      msg.line.send("start", e.offsetX, e.offsetY);
    },
    move: function (e) {
      if (this.drawing === true) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        msg.line.send("move", e.offsetX, e.offsetY);
      }
    },
    end: function (e) {
      //shape.drawing = false;
      this.drawing = false;
      $("#cv").on("mousemove", null);

      msg.line.send("end");
    },
    // 화면 전체 지우기
    clear: function (e) {
      ctx.clearRect(0, 0, cv.width, cv.height);
      msg.line.send("clear");
    },
    drawfromServer: function (data) {
      $("#penColor").val(data.color);
      $("#penWidth").val(data.width);

      if (data.type == "start") {
        ctx.beginPath();
        ctx.moveTo(data.x, data.y);
        ctx.strokeStyle = data.color;
        ctx.lineWidth = data.width;
      }
      if (data.type == "move") {
        ctx.lineTo(data.x, data.y);
        ctx.stroke();
      }
      if (data.type == "end") {
      }
      if (data.type == "clear") {
        ctx.clearRect(0, 0, cv.width, cv.height);
        shape.setShape();
      }
    },
  };

  draw.drawing = false;
  $("#cv").on("mousedown", draw.start);
  $("#cv").on("mousemove", draw.move);
  $("#cv").on("mouseup", draw.end);
  $("#penColor,#penWidth").on("change", shape.change);

  shape.setShape();

  $("#clear").on("click", draw.clear);

  // socket 전역 설정 - 서버 URL 동적 사용
  // socket = io.connect("http://" + window.location.host);

  function connection() {
    socket = io.connect("http://localhost:3000");
    socket.on("connect", function () {
      console.log("chat socket 연결 됨.");
      socket.on("welcome", function (data) {
        console.log(data);
      });
      socket.on("linesend_tocllinet", function (data) {
        draw.drawfromServer(data);
        // console.log(data);
      });
      socket.on("send message", function (data) {
        console.log(data);
        let newLine =
          $("div#messageView").html() +
          data.sender +
          ": " +
          data.message +
          "<br/>";
        $("div#messageView").html(newLine);
      });
      socket.on("broadcast", function (data) {
        console.log("브로드 케스트");
        let newLine = $("div#messageView").html() + data.message + "<br/>";
        $("div#messageView").html(newLine);
      });
      socket.on("gameStart", function (data) {
        isMyTurn = true;
        alert(data.answer + "(을)를 그려주세요!");
      });
      socket.on("error", function (data) {
        alert(data.error);
      });
      socket.on("success", function () {
        isMyTurn = true;
        draw.clear();
        console.log(isMyTurn);
      });
      socket.on("turnEnd", function () {
        isMyTurn = false;
        console.log("Turn End :", userId);
      });
    });
  }

  $("#connectBtn").on("click", function (e) {
    connection();
    console.log(socket);
  });

  $("#closeBtn").on("click", function (e) {
    if (socket) {
      socket.close();
    }
    console.log(socket);
  });
  // 커넥트가 된후에 로그인
  $("#loginBtn").on("click", function (e) {
    if (socket) {
      userId = $("#userId").val();
      socket.emit("login", {
        userId: userId,
        userName: $("#userName").val(),
        userMessage: $("#userMessage").val(),
      });
    } else {
      alert("소켓 연결 먼저 하시오.");
      $("#connectBtn").focus();
    }
  });

  $("#sendBtn").on("click", function (e) {
    if (socket) {
      const sendData = {
        sender: userId,
        recepient: $("#recepient").val(),
        message: $("#message").val(),
      };
      socket.emit("send", sendData);
      $("#message").val("");
    } else {
      alert("소켓 연결 먼저 하시오.");
    }
  });

  $("#startBtn").on("click", function (e) {
    if (userId) {
      socket.emit("gameStart", { userId: userId });
      console.log("gamestart 요청");
    } else {
      alert("로그인을 먼저 하시오.");
    }
  });
});

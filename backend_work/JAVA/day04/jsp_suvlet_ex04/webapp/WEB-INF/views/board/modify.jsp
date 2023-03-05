<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h2>게시물 정보 수정</h2>
<form action="modify.do" method="post">
	<input type="hidden" name="seq" value="${board.seq}"/></br>
	title: <input name="title" value="${board.title}" /><br/>
	content: <input name="content" value="${board.content}" /><br/>
	writeDate: <input type="date" name="writeDate" value="${board.writeDate}"  /><br/>
	writer: <input name="writer" value="${board.writer}"  /><br/>
	cnt: <input name="cnt" value="${board.cnt}"  /><br/>
	<input type="submit" value="수정 완료" /> <a href="list.do">목록</a>
</form>
</body>
</html>
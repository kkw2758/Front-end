<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>게시물 정보 입력</h2>
<form action="input.do" method="post">
	title: <input name="title" /><br/>
	content: <input name="content"  /><br/>
	writeDate: <input type="date" name="writeDate"  /><br/>
	writer: <input name="writer"/><br/>
	cnt: <input name="cnt"/><br/>
	<input type="submit" value="입력하기" />
</form>
</body>
</html>
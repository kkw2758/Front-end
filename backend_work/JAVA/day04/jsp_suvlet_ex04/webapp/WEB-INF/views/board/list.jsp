<%@page import="org.comstudy.myweb.board.model.BoardDTO"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h3>길동이의 홈페이지</h3>
<h1>게시글 목록</h1>
<%
// 리스트를 출력한다.
// request에 list속성 명으로 저장된 목록을 가져온다.
ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>)request.getAttribute("boardList");
for(BoardDTO board : boardList) {
%>
   <p><a href="modify.do?seq=<%=board.getSeq()%>"><%= board %></a>
<%
}
%>
<p><a href="input.do">게시물 등록</a></p>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>webapp/index.jsp</title>
</head>
<body>
	<h1>길동이의 홈페이지</h1>
	<h3>오신것을 환영합니다^^</h3>
	<hr/>
	<ul>
	<!-- web.xml의 ulr-pattern에서는 "/"를 반드시 넣어줘야함 -->
		<li><a href="hello">Hello Servlet 실행</a></li>
		<li><a href="list.saram">사람 정보 목록</a></li>
		<li><a href="board/list.do">게시판 글 목록</a></li>
	</ul>
	<hr/>
</body>
</html>
<!--
지원 종료됬는지 안된다... 2023/02/27
[ JSP에서 젠코딩 가능하게 하려면 ]
marketplace에서 emmet 검색 및 설치
이클립스 Window > Preferences에서  emmet 설정에 .jsp 확장자 추가
-->
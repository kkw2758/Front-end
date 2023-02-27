<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>views/saram/list.jsp</title>
</head>
<body>
  <!--
  Servlet에서 forward 되는 JSP 페이지는 request, response객체가 전달되므로
  해당 Servlet 페이지 내부에서 처리되는것과(있는것과) 같다.
  -->
  <h1>길동이의 홈페이지</h1>
  <h3>사람 목록 페이지</h3>
  <!-- HTML 주석 : JSP에서 사용 가능한 표현식. expression, EL, JSTL 등. -->
  <p>안녕하세요. ${username}님.</p> <!-- EL이라고 함 -->
  <!--
  JSP에서 기본 제공 되는 내장 객체:
  pageContext, request, response, session, application
  선언 하지 않고 바로 사용 가능하다.-->
  <p>안녕하세요. <%=request.getAttribute("username") %>님</p>
  <hr/>
  <%
  // Object객체를 ArrayList타입으로 다운 캐스팅
  // getAttribute는 Object 타입
  ArrayList<String>  userList = (ArrayList<String>)request.getAttribute("userList");
	//java의 forEach문
  for(String user : userList) {
	  out.println(user + "<br/>");
  }
  String realPath = request.getSession().getServletContext().getRealPath("/");
  out.println(realPath);
  %>
  <!-- MVC 패턴 : Model2라고도 한다. 모델 + 뷰 + 컨트롤러 형태로 만들어 진다.
  모델 : DB와 연관 되는 부분. DAO, DTO
  뷰 : 사용자가 보는 화면과 연관 되는 부분. JSP페이지, HTML + Ajax, Thymeleaf, 머스타치 ...
  컨트롤러 : Model2에서는 Servlet이 컨트롤러 역할을 한다. Model1에서는 JSP가 컨트롤러 + 모델 역할을 대신한다.
  컨트롤러 모델이랑 뷰 사이 교통정리 / 컨트롤러가 모델과 뷰를 이어준다.
  -->
</body>
</html>
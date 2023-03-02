<%@page import="org.comstudy.myweb.saram.model.SaramDTO"%>
<%@page import="java.util.List"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
SaramDAO saramDao = new SaramDAO();
List<SaramDTO> list = saramDao.findAll();
out.println(list);
%>

</body>
</html>
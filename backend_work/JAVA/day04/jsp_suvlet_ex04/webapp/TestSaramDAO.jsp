<%@page import="java.io.IOException"%>
<%@page import="java.util.List"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDAO"%>
<%@page import="org.comstudy.myweb.saram.model.SaramDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%!
SaramDAO saramDao = new SaramDAO();

public void testFindAll(JspWriter out) throws IOException{
	List<SaramDTO> list = saramDao.findAll();
	out.println(list);
}
%>
<%
SaramDTO dto = new SaramDTO(0, "KANG3", "강감찬3", 25);
//out.println(dto);
//saramDao.save(dto);

//dto.setSeq(36);
//saramDao.remove(dto);
// 삭제 테스트
testFindAll(out);
%>
</body>
</html>
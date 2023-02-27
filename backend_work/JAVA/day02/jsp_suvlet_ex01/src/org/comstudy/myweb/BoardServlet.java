package org.comstudy.myweb;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BoardServlet extends HttpServlet{
	
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	resp.setCharacterEncoding("UTF-8");
	resp.setContentType("text/html; charset=UTF-8");
	
	System.out.println("doGet() - Boardservet 호출");
	
	PrintWriter out = resp.getWriter();
	out.println("<html>");
	out.println("<body>");
	out.println("<h1>길동이의 홈페이지</h1>");
	out.println("<h3>게시판 정보 관리 페이지</h3>");
	out.println("</body>");
	out.println("<html>");
	
}
}

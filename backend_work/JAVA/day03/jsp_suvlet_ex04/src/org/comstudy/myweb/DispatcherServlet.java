package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.board.model.BoardDTO;
import org.comstudy.myweb.saram.model.SaramDTO;

public class DispatcherServlet extends HttpServlet {
   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      System.out.println("doGet() - DispatcherServlet 요청");
      
      // path 만들기
      String ctxPath = req.getContextPath();
      String reqUri = req.getRequestURI();
      int beginIndex = ctxPath.length();
      String path = reqUri.substring(beginIndex);
      System.out.println("path >>>>> " + path);
      // 하위 컨트롤러에서 path를 사용하도록 req에 저장
      req.setAttribute("path", path);
      
      Controller controller = new BoardController(); // 업캐스팅
      
//      if ("/saram/list.do".equals(path)) {
//    	  controller = new SaramController();
//      } else if ("/board/list.do".equals(path)) {
//    	  controller = new BoardController();
//      }
      
      if (path.indexOf("/saram") != -1) {
    	  controller = new SaramController();
      } else if (path.indexOf("/board") != -1) {
    	  controller = new BoardController();
      }
      
      
      String viewName = controller.process(req, resp);
      
      RequestDispatcher view = req.getRequestDispatcher(viewName);
      view.forward(req, resp);
   }
   
   @Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	   String id = req.getParameter("id");
	   String name = req.getParameter("name");
	   int age = Integer.parseInt(req.getParameter("age") == null?"0":req.getParameter("age"));
	   
	   SaramDTO dto = new SaramDTO(0, id, name, age);
	   System.out.println(dto);
	   
	   resp.sendRedirect("./saram/list.do");
	}
}
package org.comstudy.myweb;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.board.model.BoardDTO;
import org.comstudy.myweb.saram.model.SaramDAO;
import org.comstudy.myweb.saram.model.SaramDTO;

public class DispatcherServlet extends HttpServlet {
	SaramController saramController = new SaramController();
	BoardController boardController = new BoardController();
	SaramDAO saramDAO = new SaramDAO();
	private String encodingWork(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 한글 안깨지도록 인코딩 설정
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		// path 만들기
		String ctxPath = req.getContextPath();
		String reqUri = req.getRequestURI();
		int beginIndex = ctxPath.length();
		String path = reqUri.substring(beginIndex);
		System.out.println("path >>>>> " + path);
		// 하위 컨트롤러에서 path를 사용하도록 req에 저장
		req.setAttribute("path", path);
		return path;
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGet() - DispatcherServlet 요청");
		// 하위 컨트롤러에서 GET요청인지 POST요청인지 알 수 있도록 넘겨준다.
		req.setAttribute("method", "GET");
		
		String path = encodingWork(req, resp);


		Controller controller = new BoardController(); // 업캐스팅

//      if ("/saram/list.do".equals(path)) {
//    	  controller = new SaramController();
//      } else if ("/board/list.do".equals(path)) {
//    	  controller = new BoardController();
//      }

		if (path.indexOf("/saram") != -1) {
			controller = saramController;
		} else if (path.indexOf("/board") != -1) {
			controller = boardController;
		}

		String viewName = controller.getProcess(req, resp);

		RequestDispatcher view = req.getRequestDispatcher(viewName);
		view.forward(req, resp);
	}

	// 입력을 위한 처리
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String path = encodingWork(req, resp);
		// 하위 컨트롤러에서 GET요청인지 POST요청인지 알 수 있도록 넘겨준다.
		req.setAttribute("method", "POST");
		
		Controller controller = new BoardController(); // 업캐스팅

		if (path.indexOf("/saram") != -1) {
			controller = saramController;
		} else if (path.indexOf("/board") != -1) {
			controller = boardController;
		}
		controller.postProcess(req, resp);
	}
}
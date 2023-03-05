package org.comstudy.myweb;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.board.model.BoardDAO;
import org.comstudy.myweb.board.model.BoardDTO;
import org.comstudy.myweb.saram.model.SaramDTO;

public class BoardController implements Controller {
	BoardDAO boardDAO = new BoardDAO();
	@Override
	public String getProcess(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  System.out.println("BoardController GET 진입");
	  // String으로 다운캐스팅
	  String path = (String) req.getAttribute("path");
	  
	  String viewName = "/WEB-INF/views/board/home.jsp";
	  if (path.indexOf("/input.do") != -1) {
		  viewName = "/WEB-INF/views/board/input.jsp";
	  } else if (path.indexOf("/detail.do") != -1) {
		  viewName = "/WEB-INF/views/board/detail.jsp";
	  } else if (path.indexOf("/modify.do") != -1) {
		  BoardDTO dto = new BoardDTO();
		  dto.setSeq(Integer.parseInt(req.getParameter("seq")));
		  BoardDTO board = boardDAO.findOne(dto);
		  req.setAttribute("board", board);
		  System.out.println(board);
		  viewName = "/WEB-INF/views/board/modify.jsp";
	  } else {
		  ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>) boardDAO.findAll();
		  req.setAttribute("boardList", boardList);
		  viewName = "/WEB-INF/views/board/list.jsp";
	  }
      
      return viewName;
	}
	public void postProcess(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
		System.out.println("BoardController POST 진입");
		String path = (String) req.getAttribute("path");
		
//		Long seq = rs.getLong("seq");
//		String title = rs.getString("title");
//		String content = rs.getString("content");
//		Date writeDate = rs.getDate("writeDate");
//		String writer = rs.getString("writer");
//		Long cnt = rs.getLong("cnt");
//		board = new BoardDTO(seq, title, content, writeDate, writer, cnt);
//	
		
		Integer seq = Integer.parseInt(req.getParameter("seq") == null ? "0" : req.getParameter("seq"));
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		System.out.println(req.getParameter("writeDate"));
		String date = req.getParameter("writeDate");
		Date writeDate = null;
		try {
			writeDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}

		String writer = req.getParameter("writer");
		Integer cnt = Integer.parseInt(req.getParameter("cnt") == null ? "0" : req.getParameter("cnt"));
		BoardDTO dto = new BoardDTO(seq, title, content, writeDate, writer, cnt);
		
		if ("/board/input.do".indexOf(path) != -1) {
			System.out.println("저장");
			boardDAO.save(dto);
		} else if("/board/modify.do".indexOf(path) != -1) {
			// 수정 처리
			System.out.println("수정");
			System.out.println(dto);
			boardDAO.update(dto);
		}
		resp.sendRedirect(req.getContextPath() + "/board/list.do");
	}
}

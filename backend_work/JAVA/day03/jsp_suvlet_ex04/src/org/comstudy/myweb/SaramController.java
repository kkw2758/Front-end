package org.comstudy.myweb;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myweb.saram.model.SaramDTO;

public class SaramController implements Controller {
	@Override
	public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//	    System.out.println("SaramController 진입");
		// String으로 다운캐스팅
		String path = (String)req.getAttribute("path");
	    
		
		// SaramDTO 객체(Bean)가 저장된 List를 view 페이지에 전달 하기.
	      SaramDTO saram = new SaramDTO(1, "hong", "홍길동", 25);
	      req.setAttribute("saram", saram);
	      
	      ArrayList<SaramDTO> list = new ArrayList<SaramDTO>();
	      list.add(new SaramDTO(2, "hong2", "홍길동2", 26));
	      list.add(new SaramDTO(3, "hong3", "홍길동3", 23));
	      list.add(new SaramDTO(4, "hong4", "홍길동4", 22));
	      req.setAttribute("list", list);
	      
	      String viewName = "/WEB-INF/views/saram/list.jsp";
	      
	      if (path.indexOf("/input.do") != -1) {
	    	  viewName = "/WEB-INF/views/saram/input.jsp";
	      } else if (path.indexOf("/detail.do") != -1) {
	    	  viewName = "/WEB-INF/views/saram/detail.jsp";
	      } else if (path.indexOf("/modify.do") != -1) {
	    	  viewName = "/WEB-INF/views/saram/modify.jsp";
	      }
	      System.out.println("viewName" + viewName);
	      return viewName;
	}
}
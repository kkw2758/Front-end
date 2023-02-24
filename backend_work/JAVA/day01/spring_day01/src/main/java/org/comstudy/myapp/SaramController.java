package org.comstudy.myapp;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/saram")
public class SaramController {
	
	// /saram/list로 치면 실행되는 메소드
	// 라우트 콜백함수
	@RequestMapping("/list")
	public String saram() {
		System.out.println("SaramController의 saram() 메소드 호출");
		
		//views에 있는 jsp
		return "saram/list"; // WEB-INF/views/saram/list.jsp를 보여준다.
	}
	
	@RequestMapping("/input")
	public String input() {
		System.out.println("SaramController의 input() 메소드 호출");
		
		//views에 있는 jsp
		return "saram/input"; // WEB-INF/views/saram/list.jsp를 보여준다.
	}
}

package org.comstudy.saramproj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("name", "Rooney");
		// 타임리프를 사용하면 src/main/resources의 templates가 뷰 기본 풀더이다.
		return "index";
	}
}

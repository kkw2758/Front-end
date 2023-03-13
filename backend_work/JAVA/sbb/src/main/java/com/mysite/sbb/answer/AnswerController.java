package com.mysite.sbb.answer;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mysite.sbb.question.Question;
import com.mysite.sbb.question.QuestionService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequestMapping("/answer")
@RequiredArgsConstructor
@Controller
public class AnswerController {
	private final QuestionService questionService;
	private final AnswerService answerService;
	
//	@PostMapping("/create/{id}")
//	public String createAnswer(Model model, @PathVariable("id") Integer id, @RequestParam String content) {
//		Question question = this.questionService.getQuestion(id);
//		this.answerService.create(question, content);
//		return String.format("redirect:/question/detail/%s", id);
//	}
	@PostMapping("/create/{id}")
	public String createAnser(Model model, @PathVariable("id") Integer id, @Valid AnswerForm answerForm, BindingResult bindingResult) {
		Question question = this.questionService.getQuestion(id);
		if (bindingResult.hasErrors()) {
			// question_detail템플릿은 Question 객체가 필요하다
			// model 객체에 Question 객체를 저장한 후에 question_detail 템플릿을 렌더링해야 한다.
			model.addAttribute("question", question);
			return "question_detail";
		}
		this.answerService.create(question, answerForm.getContent());
		return String.format("redirect:/question/detail/%s", id);
	}
	
	
}

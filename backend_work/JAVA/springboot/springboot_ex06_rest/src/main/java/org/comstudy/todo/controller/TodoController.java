package org.comstudy.todo.controller;

import java.util.List;

import org.comstudy.todo.domain.TodoEntity;
import org.comstudy.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Controller
public class TodoController {
	@Autowired
	TodoService todoService;
	
	@GetMapping("/todo/findByUserId")
	public String findByUserId() {
		String userId = null;
		List<TodoEntity> entityList = todoService.findByUserId(userId);
		System.out.println(entityList);
		return entityList.toString();
	}
	
	@GetMapping("/todo/list")
	public String selectList() {
		List<TodoEntity> todoList = todoService.findAll();
		System.out.println(">>>>>> todo list:");
		for(TodoEntity todo : todoList) {
			System.out.println(todo);
		}
		return "todo list";
	}
}

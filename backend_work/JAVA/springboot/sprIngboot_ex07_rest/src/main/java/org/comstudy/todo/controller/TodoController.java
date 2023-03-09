package org.comstudy.todo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.comstudy.todo.domain.TodoEntity;
import org.comstudy.todo.dto.ResponseDTO;
import org.comstudy.todo.dto.TodoDTO;
import org.comstudy.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*") // React프로젝트에서 포트번호가 다른 문제 해결
@RestController
@RequestMapping("/todo")
public class TodoController {
   @Autowired
   TodoService service;
   
   String temporaryUserId = "temporary-user";
   
   // 입력 기능
   @PostMapping
   public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto) {
      try {
         // 1. Entity로 변환
         TodoEntity entity = dto.toEntity();
         // 2. entity의 id는 생성시 null이어 한다.(테이블에 insert될때 Generator로 자동 생성)
         entity.setId(null);
         // 3. 임시 UserId 사용
         entity.setUserId(temporaryUserId);
         // 4. serivice를 이용해서 Entity List 생성
         List<TodoEntity> entitis = service.create(entity);
         // 5. TodoEntity 리스틀 TodoDTO 리스트로 변환.
         List<TodoDTO> dtos = entitis.stream().map(TodoDTO::new).collect(Collectors.toList());
         // 6. TodoDTO 리스트를 ResponseDTO로 초기화
         ResponseDTO<TodoDTO> response = ResponseDTO
               .<TodoDTO>builder().data(dtos).build();
         // 7. ResponseDTO 를 리턴한다.
         return ResponseEntity.ok().body(response);
         
      } catch (Exception e) {
         // 예외 발생 시 처리
         String error = e.getMessage();
         ResponseDTO<TodoDTO> response = ResponseDTO
               .<TodoDTO>builder().error(error).build();
         return ResponseEntity.badRequest().body(response);
      }
   }
   
   // 검색
   @GetMapping
   public ResponseEntity<?> findTodo(@RequestBody TodoDTO dto) {
      return null;
   }
   
   // 수정
   @PutMapping
   public ResponseEntity<?> updateTodo(@RequestBody TodoDTO dto) {
      // 1. dto로 변환
      TodoEntity entity = dto.toEntity();
      // 2. id 초기화
      entity.setUserId(temporaryUserId);
      // 3. entity로 업데이트
      List<TodoEntity> entitis = service.update(entity);
      // 4. Entity리스트를 Todo 리스트로 변환
      List<TodoDTO> todos = entitis.stream()
            .map(TodoDTO::new).collect(Collectors.toList());
      // 5. ResponseDTO 초기화
      ResponseDTO<TodoDTO> response = ResponseDTO
            .<TodoDTO>builder().data(todos).build();
      // 6. ResponseDTO 리턴
      return ResponseEntity.ok().body(response);
   }
   
   // 서비스에는 entity, repository에는 JPA가 있음
   // 처리후에는 dto
   // DTO가 클라이언트로부터 데이터를 받아서 Entity랑 연결 해주는 객체, Entity가 데이터베이스랑 매치되는 객체, Service로 데이터베이스랑 상호작용한다고 생각해도 될까요…?
   // DTO는 데이터를 담아서 전달하는 그릇
   // entity는 데이터 수정
   // 삭제
   @DeleteMapping
   public ResponseEntity<?> deleteTodo(@RequestBody TodoDTO dto) {
      try {
         TodoEntity entity = dto.toEntity();
         // 2. id 초기화
         entity.setUserId(temporaryUserId);
         System.out.println("ENTITY");
         System.out.println(entity);
         // 3. entity로 업데이트
         List<TodoEntity> entitis = service.delete(entity);
         ResponseDTO<TodoEntity> response = ResponseDTO
               .<TodoEntity>builder().data(entitis).build();
         // 6. ResponseDTO 리턴
         return ResponseEntity.ok().body(response);
      } catch (Exception e) {
         ResponseDTO<TodoEntity> response = ResponseDTO
               .<TodoEntity>builder().error("삭제 에러!").build();
         return ResponseEntity.ok().body(response);
      }
   }


   @GetMapping("/list")
   public String selectList() {
      String userId = "";
      List<TodoEntity> todoList = service.findAll();
      System.out.print(">>>>>>>> todo list: ");
      for(TodoEntity todo :todoList) {
         System.out.println(todo);
      }
      return "todo list";
   }
}
package org.comstudy.todo.service;

import java.util.List;
import java.util.Optional;

import org.comstudy.todo.domain.TodoEntity;
import org.comstudy.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TodoService {
	@Autowired
	private TodoRepository repository;
	
	public void validate(final TodoEntity todoEntity) {
		if (todoEntity == null) {
			log.warn("etity가 null입니다.");
			throw new RuntimeException("entitiy가 null입니다.");
		}
		if (todoEntity.getUserId() == null) {
			log.warn("userId가 없습니다.");
			throw new RuntimeException("entitiy가 null입니다.");
		}
	}
	
	public String testService() {
		TodoEntity todoEntity = TodoEntity.builder().title("저녁 먹고 스터디 하기").build();
		repository.save(todoEntity);
		System.out.println();
		log.info(todoEntity.getId());
		TodoEntity savedEntity = repository.findById(todoEntity.getId()).get();
		return savedEntity.toString();
	}
	
	// 검색 기능
	public List<TodoEntity> retrieve (final String userId){
		return repository.findByUserIdContaining(userId);
	}
	
	// 수정 
	public List<TodoEntity> update (final TodoEntity todoEntity){
		validate(todoEntity);
		// 검색
		final Optional<TodoEntity> original = repository.findById(todoEntity.getId());
		// 새로운 내용으로 수정한다. NPE 체크
		original.ifPresent(todo -> {
			todo.setTitle(todoEntity.getTitle());
			todo.setDone(todoEntity.isDone());
			// 다시 저장 (update 메소드가 따로 없고 save를 활용)
			repository.save(todo);
		});
		
		return retrieve(todoEntity.getUserId());
	}
	
	// 삭제
	public List<TodoEntity> delete (final TodoEntity todoEntity){
		validate(todoEntity);
		try {
		repository.delete(todoEntity);
		} catch (Exception e) {
			throw new RuntimeException(todoEntity.getId() + " 삭제 시 에러 발생 >>> " + e.getMessage());
		}
		return retrieve(todoEntity.getUserId());
	}
	
	
	// 매개 변수로 사용된 entity참조 변수를 이용해서 원본이 바뀌지 않도록 final 선언
	public List<TodoEntity> create(final TodoEntity todoEntity) {
		// 유효성 검사 (null 체크)
		validate(todoEntity);
		repository.save(todoEntity);
		// 처리 후 로그 출력
		log.info("Entity id: {} is saved.", todoEntity.getId());
		return repository.findByUserId(todoEntity.getUserId());
		
	}
	public List<TodoEntity> findAll() {
		return repository.findAll();
	}
}

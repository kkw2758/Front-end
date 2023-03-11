package org.comstudy.todo.repository;

import java.util.List;

import org.comstudy.todo.domain.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TodoRepository extends JpaRepository<TodoEntity, String> {
	// 기존 프로젝트의 DAO 역할
	
	// findTodoEntityByUserId
	List<TodoEntity> findByUserId(String userId);
	
	// SQL 쿼리
	// 네이티브 쿼리는 실제 dbms에서 사용되는 SQL을 사용한다.
	@Query(value = "SELECT * FROM TODO WHERE USERID =?1", nativeQuery = true)
	List<TodoEntity> findByUserIdQuery(String usedId);

	// JPQL은 엔티티이름과 엔티티 멤버 필드 기준으로 사용
	@Query(value = "SELECT t FROM TodoEntity AS t WHERE t.userId =?1")
	List<TodoEntity> findByUserIdQuery2(String usedId);

}
package org.comstudy.todo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "TODO")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
// 실제 테이블
// 엔티티를 수정하면 테이블 바뀔 위험이 있음
public class TodoEntity {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id; // 오브젝트 아이디
	private String userId;
	private String title;
	private boolean done;

}

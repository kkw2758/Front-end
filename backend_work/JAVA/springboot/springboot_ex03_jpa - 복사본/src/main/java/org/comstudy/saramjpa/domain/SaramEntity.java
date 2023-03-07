package org.comstudy.saramjpa.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SARAM") // 테이블 이름 지정
// lombok 으로 getter, setter 설정
@Data	
@AllArgsConstructor
@NoArgsConstructor
public class SaramEntity {
	@Id // Id는 무조건 넣어줘야함 Beacuse of primary Key
	@GeneratedValue (strategy = GenerationType.SEQUENCE)
	private Long seq;
	private String id;
	private String name;
	private int age;
	
}

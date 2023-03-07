package org.comstudy.boardweb.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name ="BOARD") // 따로 설정안해주면 class의 이름으로 테이블 만들어짐
@Data
public class BoardEntity {
	@Id
	@GeneratedValue // persistent.xml 참고
	private Long seq;
	private String title;
	private String writer;
	private String content;
	private Date writeDate = new Date();
	private Long cnt = 0L;

}

package org.comstudy.myapp.saram.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 필드에 필요한 메소드를 자동으로 만들어줌

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaramDTO {
	private int idx;
	private String id;
	private String name;
	private int age;

}

package org.comstudy.myapp;

import org.comstudy.myapp.saram.model.SaramDTO;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Main {
	// UTF-8 아니면 다깨짐
	// Run As > Run on Server 실행 : 웹 실행
	// Run As > Java Application 실행 : 로컬 어플리케이션 / main() 에서 실행 되는 Application
	public static void main(String[] args) {
		// 웹에서 실행 되지 않음.
		System.out.println("Hello Spring world!");

		// new를 한곳에서 해줘야함
		// 직접 빈객체를 생성해서 사용.
//		SaramDTO saramDTO = new SaramDTO(11, "KIM", "김유신", 35);
//		System.out.println(saramDTO);

		// applicationContext.xml에 있는거 찾아쓰는걸 Lookup이라고함
		// applicatioonContext.xml에 선언된 Bean 객체 Lookup
		String resource = "applicationContext.xml";
		AbstractApplicationContext factory =
				new GenericXmlApplicationContext(resource);
		// getBean은 object를 리턴한다고함
		// SaramDTO 로 못받음
		// casting 해줘야함
		// object는 최상위 이기 때문에 downCasting 다된다
		SaramDTO dto = (SaramDTO)factory.getBean("saramDTO");
		System.out.println(dto);
		
	}
}

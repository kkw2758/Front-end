package org.comstudy21.myweb.service;

import java.util.List;

import org.comstudy21.myweb.model.SaramDAO;
import org.comstudy21.myweb.model.SaramDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaramServiceImpl implements SaramService {
	// SaramDAO에 있는 method들을 기준으로 Service 인터페이스를 만든다.
	// JDBC 또는 MyBatis 또는 JPa를 사용해서 DB와 연동
	@Autowired
	SaramDAO dao;
	
	
	@Override
	public List<SaramDTO> selectAll() {
		System.out.println(">>>>> selectAll():List<SaramDTO> - ServiceImpl 실행");
		dao.selectAll();
		return null;
	}

	@Override
	public SaramDTO selectOne(SaramDTO dto) {
		System.out.println(">>>>> selectOne():SaramDTO - ServiceImpl 실행");
		dao.selectOne(dto);
		return null;
	}

	@Override
	public void insert(SaramDTO dto) {
		System.out.println(">>>>> insert():void - ServiceImpl 실행");
		dao.insert(dto);
	}

	@Override
	public void update(SaramDTO dto) {
		System.out.println(">>>>> update():void - ServiceImpl 실행");
		dao.update(dto);
	}

	@Override
	public void delete(SaramDTO dto) {
		System.out.println(">>>>> delete():void - ServiceImpl 실행");
		dao.delete(dto);;
	}

}

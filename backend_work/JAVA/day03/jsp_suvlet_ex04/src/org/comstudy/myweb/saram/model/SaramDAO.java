package org.comstudy.myweb.saram.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.*;
import java.util.List;

import org.comstudy.myweb.dbcp.JdbcUtil;

public class SaramDAO {
	// Database에 CRUD를 전담하는 클래스
	// 커넥션 DB에 접속할때 필요한 객체
	Connection conn = null; // DB 연결 영도
	PreparedStatement stmt = null; // DB에 SQL 전달
	ResultSet rs = null; // 결과를 받아 올때 사용.
	
	final String FIND_ALL = "SELECT * FROM SARAM";
	final String SAVE = "insert into saram(id, name, age) values(?,?,?)";
	
	
	// 검색
	public List<SaramDTO> findAll() {
		try {
			conn = JdbcUtil.getConnection();
			stmt = (PreparedStatement)conn.createStatement();
			rs = stmt.executeQuery(FIND_ALL);
			while(rs.next()) {
				// 2023/02/28 END
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return null;
	}
	public SaramDTO findOne(SaramDTO dto) {
		return null;
	}
	// 입력
	public void save(SaramDTO dto) {
		
	}
	// 수정
	public void update(SaramDTO dto) {
		
	}
	// 삭제
	public void delete(SaramDTO dto) {
		
	}
}

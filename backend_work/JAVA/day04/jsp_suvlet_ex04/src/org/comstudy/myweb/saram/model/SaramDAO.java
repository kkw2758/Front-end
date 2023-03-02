package org.comstudy.myweb.saram.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
//import java.sql.*;
import java.util.List;

import org.comstudy.myweb.dbcp.JdbcUtil;

public class SaramDAO {
	// Database에 CRUD를 전담하는 클래스
	// 커넥션 DB에 접속할때 필요한 객체
	Connection conn = null; // DB 연결 영도
	// 변수처리를 ? 로 하도록 도와준다 - PreparedStatement
	PreparedStatement stmt = null; // DB에 SQL 전달
	ResultSet rs = null; // 결과를 받아 올때 사용.

	final String FIND_ALL = "SELECT * FROM SARAM";
	final String FIND_ONE = "SELECT * FROM SARAM WHERE SEQ=?";
	final String SAVE = "insert into saram(id, name, age) values(?,?,?)";
	final String UPDATE = "update saram set id=?, name=?, age=? WHERE seq=?";
	final String DELETE = "DELETE from saram where seq=?";

	// 검색
	public List<SaramDTO> findAll() {
		List<SaramDTO> list = new ArrayList<SaramDTO>();
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(FIND_ALL);
			rs = stmt.executeQuery();
			while (rs.next()) {
				int seq = rs.getInt("seq");
				String id = rs.getString("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				list.add(new SaramDTO(seq, id, name, age));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return list;
	}

	public SaramDTO findOne(SaramDTO dto) {
		SaramDTO saram = null;
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(FIND_ONE);
			stmt.setInt(1, dto.getSeq());
			rs = stmt.executeQuery();
			if (rs.next()) {
				int seq = rs.getInt("seq");
				String id = rs.getString("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				saram = new SaramDTO(seq, id, name, age);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return saram;
	}

	// 입력
	public void save(SaramDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(SAVE);
			stmt.setString(1, dto.getId());
			stmt.setString(2, dto.getName());
			stmt.setInt(3, dto.getAge());
			int cnt = stmt.executeUpdate();
			if (cnt > 0) {
				System.out.println("입력 성공");
				// DB 트랜잭션 처리
				conn.commit();
			} else {
				System.out.println("입력 실패!");
				conn.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
	}

	// 수정
	public void update(SaramDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(UPDATE);
			stmt.setString(1, dto.getId());
			stmt.setString(2, dto.getName());
			stmt.setInt(3, dto.getAge());
			stmt.setInt(4,  dto.getSeq());
			int cnt = stmt.executeUpdate();
			if(cnt>0) {
				System.out.println("수정 성공!");
				conn.commit();
			} else {
				System.out.println("수정 실패!");
				conn.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
	}

	// 삭제
	public void remove(SaramDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(DELETE);
			stmt.setInt(1, dto.getSeq());
			int cnt = stmt.executeUpdate();
			if (cnt > 0) {
				System.out.println("삭제 성공");
				conn.commit();
			} else {
				System.out.println("삭제 실패!");
				conn.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
	}

	   // ----------------- test -----------------

	   public static void main(String[] args) {
	      // 어플리케이션 테스트...
	      // JNDI는 톰캣에서 테스트 해야 한다.
	      // main()에서 실행 하면 톰캣과 별도로 실행 된다.
	      testFindAll();
	   }

	   // JDBC는 톰캣과 상관 없이 실행 되므로 main()에서 테스트 가능.
	   // JNDI는 톰캣에 의존적으로 실행 되므로 main()에서 단독 실행 불가능.
	   public static void testFindAll() {
	      SaramDAO dao = new SaramDAO();
	      List<SaramDTO> saramList = dao.findAll();
	      // System.out.println(saramList);
	      for (int i = 0; i < saramList.size(); i++) {
	         System.out.println(saramList.get(i));
	      }
	   }
	}

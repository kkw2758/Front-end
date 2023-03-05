package org.comstudy.myweb.board.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.comstudy.myweb.dbcp.JdbcUtil;
import org.comstudy.myweb.saram.model.SaramDTO;

public class BoardDAO {
	// 검색하거나 입력하거나 삭제할때 DB와 연결 필요 그것이 커넥션
	// 커넥션에 필요한 정보가 Connection에 담겨있다 Conneciton을 만드는 친구가 JDBCUTIL
	// 이것을 미리 만들어 놓고 쓰는것 커넥션 풀 > 마치 설렁탕집이 미리 설렁탕을 준비해놓는것 처럼
	
	Connection conn = null; // DB 연결 용도
	PreparedStatement stmt = null; // DB에 SQL 전달
	ResultSet rs = null; // 결과를 받아 올때 사용.
	
	// DB 조회 SQL 상수 선언
	// JAVA에서 final로 선언한 값은 수정 불가
	final String FIND_ALL = "SELECT * FROM BOARD";
	final String FIND_ONE = "SELECT * FROM BOARD WHERE SEQ=?"; // SEQ로 특정 정보 조회 쿼리
	final String SAVE = "insert into BOARD(seq, title, content, writeDate, writer, cnt) values(?,?,?,?,?,?)";
	final String UPDATE = "UPDATE BOARD SET title=?, content=?, writeDate=?, writer=?, cnt=? WHERE SEQ=?";
	final String DELETE = "DELETE FROM board WHERE SEQ=?";
	
	// 검색
	public List<BoardDTO> findAll() {
		List<BoardDTO> list = new ArrayList<BoardDTO>();
		
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(FIND_ALL);
			rs = stmt.executeQuery();
			while (rs.next()) {
				Integer seq = rs.getInt("seq");
				String title = rs.getString("title");
				String content = rs.getString("content");
				Date writeDate = rs.getDate("writeDate");
				String writer = rs.getString("writer");
				Integer cnt = rs.getInt("cnt");
				list.add(new BoardDTO(seq, title, content, writeDate, writer, cnt));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return list;
	}
	
	public BoardDTO findOne(BoardDTO dto) {
		BoardDTO board = null;
		
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(FIND_ONE);
			stmt.setLong(1, dto.getSeq());
			rs = stmt.executeQuery();
			if (rs.next()) {
				Integer seq = rs.getInt("seq");
				String title = rs.getString("title");
				String content = rs.getString("content");
				Date writeDate = rs.getDate("writeDate");
				String writer = rs.getString("writer");
				Integer cnt = rs.getInt("cnt");
				board = new BoardDTO(seq, title, content, writeDate, writer, cnt);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return board;		
	}
	
	// 입력
	public void save(BoardDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(SAVE);
			stmt.setLong(1, dto.getSeq());
			stmt.setString(2, dto.getTitle());
			stmt.setString(3, dto.getContent());
			stmt.setDate(4, (java.sql.Date) dto.getWriteDate());	
			stmt.setString(5, dto.getWriter());
			stmt.setLong(6, dto.getCnt());
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
	public void update(BoardDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(SAVE);
			stmt.setLong(1, dto.getSeq());
			stmt.setString(2, dto.getTitle());
			stmt.setString(3, dto.getContent());
			
			java.sql.Date sqlDate = new java.sql.Date(dto.getWriteDate().getTime());
			stmt.setDate(4, sqlDate);
			stmt.setString(5, dto.getWriter());
			stmt.setLong(6, dto.getCnt());
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
	public void remove(BoardDTO dto) {
		try {
			conn = JdbcUtil.getConnection();
			stmt = conn.prepareStatement(DELETE);
			stmt.setLong(1, dto.getSeq());
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
}

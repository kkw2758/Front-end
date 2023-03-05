package org.comstudy.myweb.board.model;

import java.util.Date;

public class BoardDTO {
	private Integer seq;
	private String title;
	private String content;
	private Date writeDate = new Date();
	private String writer;
	private Integer cnt;

	
	public BoardDTO() {
		// 디폴트 생성자 - 매개변수가 없는 생성자
		// 생성자 오버로딩 된 상황에서는 개발자가 직접 만든다.
		// 생성자가 하나도 없다면 컴파일러가 컴파일 하기 위해 자동으로 생성 한다.
	}
	
	public BoardDTO(Integer seq, String title, String content, Date writeDate, String writer, Integer cnt) {
		this.seq = seq;
		this.title = title;
		this.content = content;
		this.writeDate = writeDate;
		this.writer = writer;
		this.cnt = cnt;
	}

	public Integer getSeq() {
		return seq;
	}

	public void setSeq(Integer seq) {
		this.seq = seq;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public Integer getCnt() {
		return cnt;
	}

	public void setCnt(Integer cnt) {
		this.cnt = cnt;
	}

	@Override
	public String toString() {
		return "BoardDTO [seq=" + seq + ", title=" + title + ", content=" + content + ", writeDate=" + writeDate
				+ ", writer=" + writer + ", cnt=" + cnt + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((seq == null) ? 0 : seq.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BoardDTO other = (BoardDTO) obj;
		if (seq == null) {
			if (other.seq != null)
				return false;
		} else if (!seq.equals(other.seq))
			return false;
		return true;
	}

}

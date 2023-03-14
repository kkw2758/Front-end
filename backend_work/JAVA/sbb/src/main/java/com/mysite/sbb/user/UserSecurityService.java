package com.mysite.sbb.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
// 스프링 시큐리티 로그인 처리의 핵심 부분.
public class UserSecurityService implements UserDetailsService{
	
	private final UserRepository userRepository;
	
	@Override
	// UserDetailsService는 loadUserByUsername 메서드를 구현하도록 강제하는 인터페이스.
	// 사용자명으로 비밀번호를 조회하여 리턴하는 메서드
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// 사용자 명으로 SiteUser 객체를 조회하고 만약 사용자명에 해당하는 데이터가 없을 경우
		// UsernameNotFoundException 오류 발생
		Optional<SiteUser> _siteUser = this.userRepository.findByusername(username);
		if (_siteUser.isEmpty()) {
			throw new UsernameNotFoundException("사용자를 찾을 수 없습니다.");
		}
		SiteUser siteUser = _siteUser.get();
		List<GrantedAuthority> authorities = new ArrayList<>();
		// 만약 사용자명이 "admin"인 경우에는 ADMIN 권한을 부여하고 그외의 경우에는 USER 권한을 부여했다.
		if ("admin".equals(username)) {
			authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
		} else {
			authorities.add(new SimpleGrantedAuthority(UserRole.USER.getValue()));
		}
		// 사용자명, 비밀번호, 권한을 입력으로 스프링 시큐리티의 User 객체를 생성하여리턴
		// 스르링 시큐리티는 loadUserByUsername 메서드에 의해 리턴된 User 객체의 비밀번호가 화면으로부터 입력받은 비밀번호와 일치하는지를 검사하는 로직을 내부적으로 가지고 있다.
		return new User(siteUser.getUsername(), siteUser.getPassword(), authorities);
	}

}

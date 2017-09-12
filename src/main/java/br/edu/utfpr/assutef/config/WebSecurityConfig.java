package br.edu.utfpr.assutef.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.edu.utfpr.assutef.repository.UsuarioRepository;
import br.edu.utfpr.assutef.service.UsuarioService;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().exceptionHandling()
			.accessDeniedPage("/error403")
			.and().formLogin().loginPage("/login")
			.defaultSuccessUrl("/index/")
			.failureUrl("/login?error=bad_credentials").permitAll()
			.and().authorizeRequests()
				.antMatchers("/usuario/**").permitAll()
				.antMatchers("/index/**").hasAnyRole("USER","ADMIN")
				.antMatchers("/categorias/**").hasAnyRole("USER")
				.antMatchers("/produto/**").hasAnyRole("USER")
				.antMatchers("/**").hasAnyRole("USER");
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/webjars/**");
		web.ignoring().antMatchers("/assets/**");
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new UsuarioService(usuarioRepository);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
	}
}

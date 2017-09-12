package br.edu.utfpr.assutef.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.Setter;

@Entity
public class Permissao implements GrantedAuthority{

	private static final long serialVersionUID = 1281791641207404219L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter
	private Long id;
	
	@Column(length = 50, nullable= false)
	@Setter
	private String permissao;

	@Override
	public String getAuthority() {
		return this.permissao;
	}

}

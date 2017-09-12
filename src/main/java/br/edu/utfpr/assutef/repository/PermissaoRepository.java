package br.edu.utfpr.assutef.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.assutef.model.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long> {
	
	public Permissao findByPermissao(String permissao);

}

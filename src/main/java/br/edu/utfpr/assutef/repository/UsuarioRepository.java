package br.edu.utfpr.assutef.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.assutef.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	Usuario findByUsername(String username);
}

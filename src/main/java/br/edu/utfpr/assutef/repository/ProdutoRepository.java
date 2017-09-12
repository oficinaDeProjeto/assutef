package br.edu.utfpr.assutef.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.assutef.model.Produto;

public interface ProdutoRepository extends 
						JpaRepository<Produto, Long>{

}

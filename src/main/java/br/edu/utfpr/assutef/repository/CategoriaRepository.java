package br.edu.utfpr.assutef.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.utfpr.assutef.model.Categoria;

public interface CategoriaRepository extends 
						JpaRepository<Categoria, Long>{

}

package br.edu.utfpr.assutef.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "produto")
@Data
public class Produto implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome", length = 100, nullable = false)
	private String nome;

	@Column(name = "descricao", length = 1000, nullable = false)
	private String descricao;
	
	@Column(name = "valor", nullable = false)
	private Double valor;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "idcategoria", referencedColumnName = "id")
	private Categoria categoria;
}








package br.edu.utfpr.assutef.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.utfpr.assutef.repository.PermissaoRepository;
import br.edu.utfpr.assutef.repository.UsuarioRepository;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PermissaoRepository permissaoRepository;
	
	@RequestMapping(value = "/")
	public String form(){
		return "usuario/form";
	}
}

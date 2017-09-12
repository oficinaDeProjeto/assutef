package br.edu.utfpr.assutef.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping("/")
	public String home(){
		return "index";
	}
	
	@RequestMapping("/index/")
	public String index(Model model) {
		model.addAttribute("info", "Login efetuado com sucesso");
		return "index";
	}
	
	@RequestMapping("/erro403")
	public String errorPage(Model model) {
		model.addAttribute("info", "Acesso negado. Área restrita.");
		return "erro403";
	}
}

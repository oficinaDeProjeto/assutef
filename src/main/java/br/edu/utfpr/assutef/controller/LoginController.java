package br.edu.utfpr.assutef.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
	
	@GetMapping("/login")
	public String Login(@RequestParam(value = "error", required = false) String error, Model model) {
		if(error != null) {
			model.addAttribute("error", "Usuário e/ou senha inválidos");
		}
		return "login";
	}
	
	@GetMapping("/logout")
	public String logout() {
		return "login";
	}
}

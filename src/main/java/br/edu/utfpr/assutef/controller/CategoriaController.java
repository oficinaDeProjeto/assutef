package br.edu.utfpr.assutef.controller;

import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.edu.utfpr.assutef.model.Categoria;
import br.edu.utfpr.assutef.repository.CategoriaRepository;

@Controller
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String list(Model model){
		model.addAttribute("categorias", categoriaRepository.findAll());
		return "categoria/list";
	}
	
	@RequestMapping(value = "/form")
	public String form(){
		return "categoria/form";
	}
	
	@RequestMapping(value = "/form/{id}")
	public String form(@PathVariable Long id, Model model){
		model.addAttribute("categoria", categoriaRepository.findOne(id));
		return "categoria/form";
	}
	
	
	@RequestMapping(value = "/", method = RequestMethod.POST,
			produces = "application/json")
	@ResponseBody
	public String salvar(@Valid Categoria categoria, BindingResult erros, 
			Model model){
		JSONObject retorno = new JSONObject();
		try{
			if (erros.hasErrors()){
				retorno.put("situacao", "ERRO");
				retorno.put("mensagem", "Falha ao salvar registro!");
			}else {
				categoriaRepository.save(categoria);
				retorno.put("situacao", "OK");
				retorno.put("mensagem", "Registro salvo com sucesso!");
				retorno.put("id", categoria.getId());
			}
		}catch (Exception ex){
			retorno.put("situacao", "ERRO");
			retorno.put("mensagem", "Falha ao salvar registro! - <br /> " + 
					ex.getMessage());
		}
		
		return retorno.toString();
	}
	
	@RequestMapping(value = "/delete/{id}", produces="application/json", 
			method = RequestMethod.POST)
	@ResponseBody
	public String excluir(@PathVariable Long id){
		JSONObject retorno = new JSONObject();
		
		try{
			categoriaRepository.delete(id);
			retorno.put("situacao", "OK");
			retorno.put("mensagem", "Registro removido com sucesso!");
		}catch (Exception ex){
			retorno.put("situacao", "ERRO");
			retorno.put("mensagem", "Falha ao remover registro!");
		}
		
		return retorno.toString();
	}
}













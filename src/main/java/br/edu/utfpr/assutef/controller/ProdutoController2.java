package br.edu.utfpr.assutef.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import br.edu.utfpr.assutef.model.Produto;
import br.edu.utfpr.assutef.repository.CategoriaRepository;
import br.edu.utfpr.assutef.repository.ProdutoRepository;

@Controller
@RequestMapping("/produto2")
public class ProdutoController2 {

	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String list(Model model){
		model.addAttribute("produtos", produtoRepository.findAll());
		return "produto2/list";
	}
	
	@RequestMapping(value = "/form", method = RequestMethod.GET)
	public String form(Model model){
		model.addAttribute("categorias", categoriaRepository.findAll());
		return "produto2/form";
	}
	
	@RequestMapping(value = "/form/{id}", method = RequestMethod.GET)
	public String form(@PathVariable Long id, Model model){
		model.addAttribute("categorias", categoriaRepository.findAll());
		model.addAttribute("produto", produtoRepository.findOne(id));
		return "produto2/form";
	}
	
	
	@RequestMapping(value = "/", method = RequestMethod.POST, 
			produces = "application/json")
	@ResponseBody
	public String salvar(@Valid Produto produto, 
			@RequestParam("anexo") MultipartFile anexo,
			@RequestParam("anexos") MultipartFile[] anexos,
			BindingResult erros, 
			Model model,
			HttpServletRequest request){
		JSONObject retorno = new JSONObject();
		try{
			if (erros.hasErrors()){
				retorno.put("situacao", "ERRO");
				retorno.put("mensagem", "Falha ao salvar registro!");
			}else{
				produtoRepository.save(produto);
				
				
				File dir = new File(
						request.getServletContext()
						.getRealPath("/WEB-INF/view/produto2/images/" + 
									 produto.getId()));
				if (!dir.exists()){
					dir.mkdirs();
				}

				String caminhoAnexo = request.getServletContext()
						.getRealPath("/WEB-INF/view/produto2/images/" + 
									 produto.getId() + "/");
				String extensao = anexo.getOriginalFilename()
						.substring(
								anexo.getOriginalFilename().lastIndexOf("."), 
								anexo.getOriginalFilename().length());
				String nomeArquivo = produto.getId() + extensao ; 
				salvarAnexoDisco(caminhoAnexo + nomeArquivo, anexo.getBytes(),
						request);
				int i = 1;
				for (MultipartFile a : anexos) {
					extensao = a.getOriginalFilename()
							.substring(
									a.getOriginalFilename().lastIndexOf("."), 
									a.getOriginalFilename().length());
					nomeArquivo = produto.getId() + "_" + i + extensao ; 
					salvarAnexoDisco(caminhoAnexo + nomeArquivo, a.getBytes(),
							request);
					i++;
				}
				
				retorno.put("id", produto.getId());
				retorno.put("situacao", "OK");
				retorno.put("mensagem", "Registro salvo com sucesso!");
			}
		}catch (Exception ex){
			retorno.put("situacao", "ERRO");
			retorno.put("mensagem", "Falha ao salvar registro!");
		}
		return retorno.toString();
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST,
			produces="application/json")
	@ResponseBody
	public String excluir(@PathVariable Long id){
		JSONObject retorno = new JSONObject();
		
		try{
			produtoRepository.delete(id);
			retorno.put("situacao", "OK");
			retorno.put("mensagem", "Registro removido com sucesso!");
		}catch (Exception ex){
			retorno.put("situacao", "ERRO");
			retorno.put("mensagem", "Falha ao remover registro!");
		}
		
		return retorno.toString();
	}
	
	private void salvarAnexoDisco(String caminho, byte[] bytes,
			HttpServletRequest request) throws Exception {
		try {
			FileOutputStream fileout = new FileOutputStream(new File(caminho));
			BufferedOutputStream stream = new BufferedOutputStream(fileout);
			stream.write(bytes);
			stream.close();
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao fazer upload da imagem: "
					+ e.getMessage());
		}
	}
}








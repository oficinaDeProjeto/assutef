<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib tagdir="/WEB-INF/tags/layout" prefix="layout"%>
<layout:template>
	<jsp:attribute name="cssEspecificos">
	</jsp:attribute>
	<jsp:attribute name="scriptsEspecificos">
		<script type="text/javascript">
		$("#frm").submit(function(){
			var formData = new FormData($("#frm")[0]);
			$.ajax({
				type : $("#frm").attr('method'),
				url : $("#frm").attr('action'),
				data : formData,
				async : false,
				cache : false,
				contentType : false,
				processData : false,
				success : function(data) {
					swal({
						title : "Salvo!",
						text : "Registro salvo com sucesso.",
						type : "success",
						showCancelButton : false,
						confirmButtonColor : "#DD6B5",
						confirmButtonText : "Ok",
						closeOnConfirm : false
					}, function() {
						window.location = '<c:url value="/produto2/"/>';
					});
				},//Fim success
				error : function() {
					swal("Falha!", "Falha ao salvar registro.", "error");
				}
			});//Fim ajax
			return false;
		}); //Fim submit
		</script>
	</jsp:attribute>

	<jsp:body>
		<div class="container">	
			
			
			<div class="starter-template">
				<h1>Cadastro de Produtos</h1>
			</div>
        <div class="col-md-6 col-md-offset-3">
			
			<form id="frm" action="<c:url value="/produto2/"/>" method="POST"
					class="well span6" enctype="multipart/form-data">
				<div class="form-group">
					<label for="id">Código:</label>
					<input type="text" id="id" name="id" value="${produto.id}" readonly
							class="form-control" />
				</div>		
				<div class="form-group">
					<label for="nome">Nome:</label>
					<input type="text" id="nome" name="nome" class="form-control"
							value="${produto.nome}" />
				</div>
				<div class="form-group">
					<label for="descricao">Descrição:</label>
					<textarea id="descricao" name="descricao" rows="5"
							class="form-control">${produto.descricao}</textarea>
				</div>
				<div class="form-group">
					<label for="nome">Valor:</label>
					<input type="text" id="valor" name="valor" class="form-control"
							value="${produto.valor}" />
				</div>
				
				<div class="form-group">
					<label for="categoria">Categoria:</label>
					<select id="categoria" name="categoria" class="form-control">
						<option value="">(Selecione)</option>
						<c:forEach var="categoria" items="${categorias}">
							<option value="${categoria.id}"
									${categoria.id==produto.categoria.id ? 'selected' : ''}>
							${categoria.descricao}</option>
						</c:forEach>
					</select>	
				</div>
				<div class="form-group">
					<label for="anexo">Anexo:</label>
                    <input required
                    	type="file"  
                    	id="anexo" 
                    	name="anexo"
                    	class="form-control"/>
                </div>
                <div class="form-group">
					<label for="anexos">Anexos (Multifile):</label>
                    <label class="btn btn-success btn-file form-control">
   					Carregar arquivos...
					<input required multiple
                    	type="file"  
                    	id="anexos" 
                    	name="anexos"
                    	style="display: none;">
                	</label>
                </div>      
				<button type="reset" class="btn btn-default">Limpar</button>
				<button type="submit" class="btn btn-primary">Salvar</button>
			</form>
			</div>
		</div>
	</jsp:body>
</layout:template>
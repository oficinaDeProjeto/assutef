<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ taglib tagdir="/WEB-INF/tags/layout" prefix="layout"%>

<layout:template>
	<jsp:attribute name="cssEspecificos">
</jsp:attribute>

<jsp:attribute name="scriptsEspecificos">
	<script type="text/javascript">
		function remover(id,row) {
			swal({   
				title: "Confirma a remoção do registro?!",   
				text: "Esta ação não pode ser desfeita!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",
				cancelButtonText: "Cancelar",   
				confirmButtonText: "Remover",   
				closeOnConfirm: false 
				}, 
				function(){   
					var destino = '<c:url value="/produto/delete/"/>' + id;
					$.ajax({
						type : 'POST',
						url : destino,
						success : function(data) {
							if (data.situacao == "OK"){
								$('#row_' + id).remove();
								swal("Removido!", "Registro removido com sucesso.", "success");
							}else{
								swal("Erro!", "Falha ao remover registro.", "error");
							}
						},//Fim success
						error : function() {
							swal("Erro!", "Falha ao remover registro.", "error");
						}
					}); //Fim ajax
			}); //Fim swal
		}
	</script>
</jsp:attribute>

	<jsp:body>
		<div class="container">
			<div class="starter-template">
				<h1>Lista de Produtos</h1>
			</div>
			<a class="btn btn-primary" href="<c:url value="/produto/form"/>" 
				id="novo"><i class="fa fa-plus" aria-hidden="true"></i> Novo</a>
			
			<div class="spacer"></div>
			<table id="dados" data-id-field="id" data-unique-id="id"
				class="table table-striped table-bordered display"
				style="width: 100%">
				<thead>
					<tr>
						<th class="col-md-2" >Código</th>
						<th>Nome</th>
						<th>Categoria</th>
						<th class="col-md-2">Valor</th>
						<th class="col-md-2">Ação</th>
					</tr>
				</thead>
				<tbody>
				<c:forEach var="produto" items="${produtos}">
				<tr id="row_${produto.id}">
					<td>${produto.id}</td>
					<td>${produto.nome}</td>
					<td>${produto.valor}</td>
					<!-- Aqui é exibida a descrição da categoria. O restante da tabela permanece
					semelhante ao que foi feito com categoria -->
					<td>${produto.categoria.descricao}</td>
					<td>
<a class="edit btn btn-primary" href="<c:url value="/produto/form/${produto.id}"/>" 
title="Editar">
<i class="fa fa-pencil" aria-hidden="true"></i></a>
					
<a class="remove btn btn-danger" href="javascript:remover(${produto.id})" 
title="Remover">
<i class="fa fa-trash" aria-hidden="true"></i></a>
					</td>
				</tr>
			</c:forEach>
				</tbody>
			</table>
			<div class="spacer"></div>
		</div>
	</jsp:body>
</layout:template>
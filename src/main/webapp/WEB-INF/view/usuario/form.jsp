<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib tagdir="/WEB-INF/tags/layout" prefix="layout" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"
	prefix="c" %>
<layout:template>
	<jsp:attribute name="cssEspecificos">
		<link href="<c:url value="/static/css/geral.css" />" 
		rel="stylesheet" />
	</jsp:attribute>
	<jsp:attribute name="scriptsEspecificos">
	</jsp:attribute>
	<jsp:body>
		<section class="wrapper">
            <div class="row">
                <div class="col-md-3 col-md-offset-3">
                    <fieldset>
                        <legend>
                            Cadastro de Usuário:
                        </legend>
                        
                        <form action="/usuario/" method="POST"
                              id="frm" name="frm" class="well span6" role="form">
                            <div class="form-group">
                                <label for="id">Código:</label>
                                <input type="text" class="form-control" readonly
                                       id="id" name="id" value="${id}" />
                            </div>
                            
                            <div class="form-group">
                                <label for="nome">Nome:</label>
                                <input type="text" class="form-control" id="nome" 
                                       name="nome" />
                            </div>
                            
                            <div class="form-group">
                                <label for="username">Email:</label>
                                <input type="email" class="form-control" id="username" 
                                       name="username" />
                            </div>
                            
                            <div class="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" class="form-control" id="password" 
                                       name="password" />
                            </div>
                            
                            <button type="reset" class="btn btn-default">Limpar</button>
                            <button type="submit" name="submit" class="btn btn-primary">Salvar</button>
                            
                            <br /><br />
                            <div id="divErro" class="alert alert-danger" style="display: none;"></div>
                            <div id="divSucesso" class="alert alert-success" style="display: none;"></div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </section>
	</jsp:body>
</layout:template>
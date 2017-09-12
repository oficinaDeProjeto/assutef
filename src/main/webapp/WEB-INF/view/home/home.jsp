<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib tagdir="/WEB-INF/tags/layout" prefix="layout" %>

<layout:template>
	<jsp:attribute name="cssEspecificos">
		<link href="<c:url value="/static/css/geral.css" />" rel="stylesheet"/>
		
	</jsp:attribute>
	
	<jsp:attribute name="scriptsEspecificos">
	</jsp:attribute>
	
	<jsp:body>
			<h1>Bem vindo!!!</h1>
	</jsp:body>
</layout:template>
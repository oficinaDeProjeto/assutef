<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ taglib tagdir="/WEB-INF/tags/layout" prefix="layout" %>

<layout:template>
	<jsp:attribute name="cssEspecificos">
		<link href="<c:url value="/static/css/geral.css" />" 
		rel="stylesheet" />
	</jsp:attribute>
	<jsp:attribute name="scriptsEspecificos"></jsp:attribute>
	<jsp:body>
		<div class="container">
			<h1>${info}</h1>
			<br />
			<br />
			<br />
			<br />
		</div>
	</jsp:body>
</layout:template>
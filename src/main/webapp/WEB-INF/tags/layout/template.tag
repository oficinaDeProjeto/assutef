<%@ tag pageEncoding="utf-8"%>

<%@ attribute name="cssEspecificos" fragment="true" required="false"%>
<%@ attribute name="scriptsEspecificos" fragment="true" required="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

    <title>DASHGUM - FREE Bootstrap Admin Template</title>

    <!-- Bootstrap core CSS -->
    <link href="<c:url value="/assets/css/bootstrap.css" />" rel="stylesheet" />
    <!--external css-->
    
    <link href="<c:url value="/assets/font-awesome/css/font-awesome.css" />" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/zabuto_calendar.css" />"/>
    <link rel="stylesheet" type="text/css" href="<c:url value="/assets/js/gritter/css/jquery.gritter.css" />" />
    <link rel="stylesheet" type="text/css" href="<c:url value="/assets/lineicons/style.css" />" />

	<link href="<c:url value="/assets/css/sweetalert.css" />" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="<c:url value="/assets/css/style.css" />" rel="stylesheet" />
    <link href="<c:url value="/assets/css/style-responsive.css" />" rel="stylesheet"/>

    <!--<script src="assets/js/chart-master/Chart.js"></script>-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <jsp:invoke fragment="cssEspecificos"></jsp:invoke>
  </head>

  <body>

  <section id="container" >
      <!-- **********************************************************************************************************************************************************
      TOP BAR CONTENT & NOTIFICATIONS
      *********************************************************************************************************************************************************** -->
      <!--header start-->
      <header class="header black-bg">
              <div class="sidebar-toggle-box">
                  <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
              </div>
            <!--logo start-->
            <a href="index.html" class="logo"><b>Assutef</b></a>
            <!--logo end-->
            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="<c:url value="/logout"/>">Sair</a></li>
            	</ul>
            </div>
        </header>
      <!--header end-->

      <!-- **********************************************************************************************************************************************************
      MAIN SIDEBAR MENU
      *********************************************************************************************************************************************************** -->
      <!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
			      <li>
	              	  	<p class="centered"><a href="profile.html"><img src="<c:url value="/assets/img/ui-sam.jpg" />" class="img-circle" width="60"></a></p>
	              		<h5 class="centered">Assutef</h5>
				  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-desktop"></i>
                          <span>Cadastros</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="<c:url value="/categoria/"/>">Categorias</a></li>
                          <li><a  href="<c:url value="/produto/"/>">Produtos</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-users"></i>
                          <span>Pessoas</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="general.html">Associados</a></li>
                          <li><a  href="buttons.html">Dependentes</a></li>
                          <li><a  href="panels.html">Funcionários</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-tree"></i>
                          <span>Espaços</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="general.html">Cadastro</a></li>
                          <li><a  href="buttons.html">Locação</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-street-view"></i>
                          <span>Atividades</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="general.html">Cadastro</a></li>
                          <li><a  href="buttons.html">Matrícula</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-futbol-o"></i>
                          <span>Materiais</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="general.html">Cadastro</a></li>
                          <li><a  href="buttons.html">Empréstimo</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-bank"></i>
                          <span>Patrimônio</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-key"></i>
                          <span>Usuários</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-tasks"></i>
                          <span>Forms</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="form_component.html">Form Components</a></li>
                      </ul>
                  </li>
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->

      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
      <!--main content start-->
      <section id="main-content">
      	<jsp:doBody />
      </section>

      <!--main content end-->
      <!--footer start-->
      <footer class="site-footer">
          <div class="text-center">
              2017 - Turma 6º
              <a href="index.html#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>
	
    <!-- js placed at the end of the document so the pages load faster -->
    <script src="<c:url value="/assets/js/jquery.js" />"></script>
    <script src="<c:url value="/assets/js/jquery-1.8.3.min.js" />"></script>
    <script src="<c:url value="/assets/js/bootstrap.min.js" />"></script>
    <script class="include" type="text/javascript" src="<c:url value="/assets/js/jquery.dcjqaccordion.2.7.js" />"></script>
    <script src="<c:url value="/assets/js/jquery.scrollTo.min.js" />"></script>
    <script src="<c:url value="/assets/js/jquery.nicescroll.js" />" type="text/javascript"></script>
    <script src="<c:url value="/assets/js/jquery.sparkline.js" />"></script>
	<script src="<c:url value="/assets/js/sweetalert.min.js" />" type="text/javascript"></script>

    <!--common script for all pages-->
    <script src="<c:url value="/assets/js/common-scripts.js" />"></script>

    <!--<script type="text/javascript" src="<c:url value="/assets/js/gritter/js/jquery.gritter.js" />"></script>
    <script type="text/javascript" src="<c:url value="/assets/js/gritter-conf.js" />"></script>-->

    <!--script for this page-->
    <script src="<c:url value="/assets/js/sparkline-chart.js" />"></script>
	<script src="<c:url value="/assets/js/zabuto_calendar.js" />"></script>
	<!--<script type="text/javascript">
        $(document).ready(function () {
        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'Welcome to Dashgum!',
            // (string | mandatory) the text inside the notification
            text: 'Hover me to enable the Close Button. You can hide the left sidebar clicking on the button next to the logo. Free version for <a href="http://blacktie.co" target="_blank" style="color:#ffd777">BlackTie.co</a>.',
            // (string | optional) the image to display on the left
            image: 'assets/img/ui-sam.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });

        return false;
        });
	</script>-->

	<script type="application/javascript">
        $(document).ready(function () {
            $("#date-popover").popover({html: true, trigger: "manual"});
            $("#date-popover").hide();
            $("#date-popover").click(function (e) {
                $(this).hide();
            });

            $("#my-calendar").zabuto_calendar({
                action: function () {
                    return myDateFunction(this.id, false);
                },
                action_nav: function () {
                    return myNavFunction(this.id);
                },
                ajax: {
                    url: "show_data.php?action=1",
                    modal: true
                },
                legend: [
                    {type: "text", label: "Special event", badge: "00"},
                    {type: "block", label: "Regular event", }
                ]
            });
        });


        function myNavFunction(id) {
            $("#date-popover").hide();
            var nav = $("#" + id).data("navigation");
            var to = $("#" + id).data("to");
            console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
        }
    </script>

	<jsp:invoke fragment="scriptsEspecificos"></jsp:invoke>
  </body>
</html>












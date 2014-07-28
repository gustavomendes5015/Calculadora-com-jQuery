<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title> Calculadora </title>
	<link rel = "stylesheet" href = "css/estilo.css">
	<script type = "text/javascript" src = "js/jquery.min.js"></script>
    <script type = "text/javascript" src = "js/slide.js"></script>
</head>
<body>
	<section class = "calculadora">
		<section class = "nav">
			<ul>
				<li>
					<a href = "">Opções</a>
					<ul>
						<li><a href = "" id = "historico">Exibir histórico</a></li>
						<li><a href = "" id = "limparHistorico">Limpar Histórico</a></li>
					</ul>
				</li>
			</ul>
		</section>
		<section class = "visor">
			<p id = "pVisor">
				<input type = "text" value = "" placeholder = "0" id = "visor">
			</p>
		</seciton>
		<section class = "botoes">
			<p id = "meio">
				<?php 
					$botoes = array(
						'7', '8', '9', '+',
						'4', '5', '6', '-',
						'1', '2', '3', '*',
						'0', '.', '=', '/', 
						'(', ')', 'C', 'DEL'
					);
					for($i = 0; $i < sizeof($botoes); $i++) {
						if($botoes[$i] == 'C') {
							echo '<button id = "limpar">C</button>';
						} else if($botoes[$i] == 'DEL') {
							echo '<button id = "del">DEL</button>';
						} else if($botoes[$i] == '=') {
							echo '<button id = "resultado">=</button>';
						} else {
							echo '<button class = "operandos" value = '.$botoes[$i].'>'.$botoes[$i].'</button>';
						}
					}
				?>
			</p>
		</section>
		<section class = "historico">
		</section>
	</body>
</html>





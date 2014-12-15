<section id="corpo">
	<div class="container">
		<div class="row">
		
			<div class="col-md-12">
				<h2>Planos</h2>
				
				<p>O repositório de arquivos NaNuvem traz segurança para seu trabalho. Ele conta com três excelentes 
				tipos de planos: o Plano Stratus, Plano Autocumulus e Plano Cirus. Conheça e escolha aqui o melhor 
				plano que se adeque as suas necessidades sejam elas pessoais, comerciais e empresariais.</p>

				<div class="row">

					<?php foreach ($planos as $plano): ?>
						<div class="col-md-4">
						<center><img src="<?php echo base_url('uploads/'.$plano->imagem); ?>" width="180px"></center>
								
							<h3><?php echo $plano->nome ?></h3>
							<p><?php echo $plano->descricao ?></p>
						</div>
					<?php endforeach ?>
				</div>
			</div>
			<div class="col-md-12">
				<hr>
				<h2>Bônus</h2>

				<p>O repositório de arquivos NaNuvem traz para nossos usuários cadastrados bônus que possuem o
				objetivo de aprimorar cada vez mais o plano adquirido, tornando-o sempre melhor. Os bônus são 
				conquistados de acordo com os desafios executados por eles. Venha fazer parte do NaNuvem e 
				aprimore o seu plano!</p>
				
				<div class="row">
					<div class="col-md-12">

						<div id="the-carousel" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#the-carousel" data-slide-to="0" class=""></li>
								<li data-target="#the-carousel" data-slide-to="1" class="active"></li>
								<li data-target="#the-carousel" data-slide-to="2" class=""></li>
								<li data-target="#the-carousel" data-slide-to="3" class=""></li>
							</ol>

						<div class="carousel-inner">
							<div class="item active">
								<div class="col-sm-6">
									<img src="img/imagem-principal.png">
								</div>
								<div class="col-sm-6">
										<h3>Bonus 1</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
							<div class="item">
								<div class="col-sm-6">
									<img src="img/imagem-principal.png">
								</div>
								<div class="col-sm-6">
										<h3>Bonus 2</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
							<div class="item">
								<div class="col-sm-6">
									<img src="img/imagem-principal.png">
								</div>
								<div class="col-sm-6">
										<h3>Bonus 3</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
							<div class="item">
								<div class="col-sm-6">
									<img src="img/imagem-principal.png">
								</div>
								<div class="col-sm-6">
										<h3>Bonus 4</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>

						<a class="left carousel-control" href="#the-carousel" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left"></span>
						</a>
						<a class="right carousel-control" href="#the-carousel" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right"></span>
						</a>
					</div>
				</div>
			</div>

			<div class="col-md-12">
				<hr>
				<h2>Depoimentos</h2>
				<div class="row persona">
					<div class="col-md-2 col-md-offset-1">
						<img src="img/persona1.jpg" alt="..." class="img-circle" width="150px">
					</div>
					<div class="col-md-8">
						<h3><span class="glyphicon glyphicon-comment"></span> Beakman <small>descrição breve</small> </h3>
						<p>Já utilizei muito repositórios de arquivos, mas o NaNuvem me surpreendeu com sua interface atrativa e sua diversidade de recursos. Estou adorando utilizá-lo.</p>
					</div>
				</div>

				<div class="row persona"> 
					<div class="col-md-2 col-md-offset-1"> 
						<img src="img/persona2.jpg" alt="..." class="img-circle" width="150px"> 
					</div> 
					<div class="col-md-8"> 
						<h3><span class="glyphicon glyphicon-comment"></span> Albert Einstein <small>descrição breve</small> </h3> 
						<p>O NaNuvem é um dos melhores repositórios de arquivos que já utilizei em minha vida, oferece uma excelente segurança aos meus arquivos, além de ter um acesso fácil e um uso satisfatório. Eu utilizo o NaNuvem em meus trabalhos e recomendo sempre aos meus amigos. Vale a pena!</p>
					</div>
				</div>

				<div class="row persona"> 
					<div class="col-md-2 col-md-offset-1"> 
						<img src="img/persona3.jpg" alt="..." class="img-circle" width="150px"> 
					</div> 
					<div class="col-md-8"> 
						<h3><span class="glyphicon glyphicon-comment"></span> Carl sagan <small>descrição breve</small> </h3> 
						<p>O repositório de arquivos NaNuvem é excelente, desde quando o conheci até o prezado momento nunca me deixou na mão. Tem uma interface agradável, uma gama de recursos muitos úteis para o meu uso, além de oferecer diferentes tipos de planos a diferentes tipos de pessoas. Recomendo!</p>
					</div>
				</div>
			</div>

		</div>
	</div>			
</section>

<section id="corpo">
	<div class="container">
		<div class="row">
		
			<div class="col-md-12">
				<h2>Planos</h2>
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
				<h2>Bonus</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				
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
						<p>Texto comentário do individuo ao lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.</p>
					</div>
				</div>

				<div class="row persona"> 
					<div class="col-md-2 col-md-offset-1"> 
						<img src="img/persona2.jpg" alt="..." class="img-circle" width="150px"> 
					</div> 
					<div class="col-md-8"> 
						<h3><span class="glyphicon glyphicon-comment"></span> Albert Einstein <small>descrição breve</small> </h3> 
						<p>Texto comentário do individuo ao lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.</p>
					</div>
				</div>

				<div class="row persona"> 
					<div class="col-md-2 col-md-offset-1"> 
						<img src="img/persona3.jpg" alt="..." class="img-circle" width="150px"> 
					</div> 
					<div class="col-md-8"> 
						<h3><span class="glyphicon glyphicon-comment"></span> Carl sagan <small>descrição breve</small> </h3> 
						<p>Texto comentário do individuo ao lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.Texto comentá do individua do lado que usou o QuímicoApp e gostou.</p>
					</div>
				</div>
			</div>

		</div>
	</div>			
</section>

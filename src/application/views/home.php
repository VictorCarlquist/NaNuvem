<header id="cabecario">

	<div class="container">
		<div class="row">
			
			<div class="col-md-8">
				<center>
					<h1><span class="nanuvem-logo"></span></h1>
					<small><h2>Bem vindo ao céu!</h2></small>
				</center>
			</div>
			
			<div class="col-md-4">
				<form class="form-horizontal">

					<div class="form-group">
						<label for="email">E-mail</label>
						<input type="text" name="email" id="email" class="form-control" > 
					</div>

					<div class="form-group">
						<label for="password">Senha</label>
						<input type="password" name="password" id="password" class="form-control" > 
					</div>

					<center>
						<button class="btn btn-primary">Entrar</button>
						<button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Cadastrar-se</button>
					</center>

				</form>
			</div>
		</div>
	</div>
</header>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
    	<div class="modal-content">
      		<div class="modal-header">
        		<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        		<h4 class="modal-title" id="myModalLabel">Cadastro</h4>
      		</div>
      		<div class="modal-body">
      			<form class="from horizontal">
      				<div class="form-group">
						<label for="email">E-mail</label>
						<input type="text" name="email" id="email" class="form-control" > 
					</div>

					<div class="form-group">
						<label for="password">Senha</label>
						<input type="password" name="password" id="password" class="form-control" > 
					</div>

					<div class="form-group">
						<label for="repetir-password">Repetir Senha</label>
						<input type="password" name="repetir-password" id="repetir-password" class="form-control" > 
					</div>
      			</form>
     		</div>
      		<div class="modal-footer">
        		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        		<button type="button" class="btn btn-primary">Save changes</button>
      		</div>
    	</div>
  	</div>
</div>

<section id="corpo">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>Planos</h2>
				<div class="row">
				<?php foreach ($planos as $plano): ?>
					<div class="col-md-4">
						<center><span style="font-size: 124px" class="glyphicon glyphicon-picture"></span></center>
						<h3><?php echo $plano->nome ?></h3>
						<p><?php echo $plano->descricao ?></p>
					</div>
				<?php endforeach ?>
				
				</div>
			</div>

			<div class="col-md-12">
				<h2>Promoções</h2>
				<div class="row">
					<div class="col-md-3">
						<h3>Pacote 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dol</p>
					</div>

					<div class="col-md-3">
						<h3>Pacote 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dol</p>
					</div>

					<div class="col-md-3">
						<h3>Pacote 3</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dol</p>
					</div>
					
					<div class="col-md-3">
						<h3>Pacote 4</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dol</p>
					</div>
				</div>
			</div>

			<div class="col-md-12">
				<h2>Bonus</h2>
				<div class="row">
					<div class="col-md-12">
						<center><span style="font-size: 124px" class="glyphicon glyphicon-picture"></span></center>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dol</p>
					</div>
				</div>
			</div>

		</div>
	</div>			
</section>

<footer id="rodape">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<center>
					<small><span class="nanuvem-logo"></span></small> &copy; 2014.
				</center>
			</div>
		</div>
	</div>
</footer>
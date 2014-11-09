
			<div class = "row">
				<nav class = "col-sm-3">
					<ul class="nav nav-pills nav-stacked menu" >
						<li class = "active"><a href ="#"><span class="glyphicon glyphicon glyphicon-wrench"></span> Gerenciar contas</a></li>
  						<li><a href ="#"><span class="glyphicon glyphicon-list-alt"></span> Arquivos</a></li>
  						<li><a href="<?php echo site_url('adm/cliente'); ?>"><span class="glyphicon glyphicon-user"></span> Clientes</a></li>
  						<li><a href="#"><span class="glyphicon glyphicon-usd"></span> Planos</a></li>
  						<li><a href="#"><span class="glyphicon glyphicon-star-empty"></span> Bônus</a></li>
					</ul>
					<br />
					<ul class="nav nav-pills nav-stacked menu">
						<li class = "active"><a href ="#"><span class="glyphicon glyphicon glyphicon-wrench"></span> Gerenciar administradores</a></li>
  						<li><a href ="#"><span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-user"></span> Grupos</a></li>
  						<li><a href="#"><span class="glyphicon glyphicon-user"></span> Usuário</a></li>
  						<li><a href="#"><span class="glyphicon glyphicon-eye-open"></span> Auditoria</a></li>
  					</ul>

				</nav>
				<section class = "col-sm-9" id = "content">
					<h1>Listar Clientes</h1>
					<form action="#" class="navbar-form">
					   <div class="input-group">
					      <input type="text" class="form-control">
					      <span class="input-group-btn">
					        <button class="btn btn-info" type="button"><span id="search" class="glyphicon glyphicon-search"></span></button>
					      </span>
					    </div><!-- /input-group -->

					</form>

					<br />
					Página <a href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a> 

					<table class="table">
						<tr>
							<th>#</th>
							<th>Titulo1</th>
							<th>Titulo2</th>
							<th>Titulo3</th>
							<th>Titulo4</th>
							<th>Ações</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Teste1</td>
							<td>Teste2</td>
							<td>Teste3</td>
							<td>Teste4</td>
							<td><a href="#" title="Excluir"><span class="glyphicon glyphicon-trash"></span></a> <a href="javascript:$('#content').load('editar_cliente.html');void(0)" title="Editar"><span class="glyphicon glyphicon-edit"></span></a></td>
						</tr>
						<tr>
							<td>2</td>
							<td>Teste1</td>
							<td>Teste2</td>
							<td>Teste3</td>
							<td>Teste4</td>
							<td><a href="#" title="Excluir"><span class="glyphicon glyphicon-trash"></span></a> <a href="editar_cliente.html" title="Editar"><span class="glyphicon glyphicon-edit"></span></a></td>
						</tr>
						<tr>
							<td>3</td>
							<td>Teste1</td>
							<td>Teste2</td>
							<td>Teste3</td>
							<td>Teste4</td>
							<td><a href="#" title="Excluir"><span class="glyphicon glyphicon-trash"></span></a> <a href="editar_cliente.html" title="Editar"><span class="glyphicon glyphicon-edit"></span></a></td>
						</tr>

					
					</table>
				</section>
			</div>
			<footer class="row footer">
				<div class = "col-sm-12">
					<span class="glyphicon glyphicon-copyright-mark"></span> 6º Módulo TADS 
				</div>
			</footer>
		</div>	

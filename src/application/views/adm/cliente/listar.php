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
							<th>Nome</th>
							<th>E-mail</th>
							<th>Ações</th>
						</tr>
						<?php
							$cont = 1;
							foreach($clientes as $cliente)
							{
						?>
								<tr>
										<td><?php echo $cont; ?></td>
										<td><?php echo $cliente->nome; ?></td>
										<td><?php echo $cliente->email; ?></td>
										<td>
											<a href="#" title="Excluir">
												<span class="glyphicon glyphicon-trash"></span>
											</a> 
											<a href="<?php echo site_url('/adm/editar_cliente/' . $cliente->codigo); ?>" title="Editar">
												<span class="glyphicon glyphicon-edit"></span>
											</a>
										</td>
									</tr>
						<?
								$cont++;
							}
						?>					
					</table>
				</section>
			

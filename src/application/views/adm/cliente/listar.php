				<section class = "col-sm-9" id = "content">
					<h1>Gerenciar Clientes</h1>
					<form action="#" class="form-horizontal" id = "frm_pesquisa">
					   <div class="input-group">
					      <input type="text" class="form-control focusedInput" name = "pesquisa" id = "pesquisa" 
					      placeholder = "Digite o nome ou sobrenome. Não digite caracteres especiais.">
					      <span class="input-group-btn">
					        <button class="btn btn-info" type="button" id = "btn_pesquisa"><span id="search" class="glyphicon glyphicon-search"></span></button>
					      </span>
					    </div><!-- /input-group -->

					</form>
						
							<form action="<?php echo site_url('adm_cliente/insere_cliente'); ?>" ethod = "post" 
							id = "frm_cadastro">
								<div class="row">
									<div class="col-sm-5">
										<input type="text" class = "form-control required" name = "nome" id = "nome" placeholder = "Digite o nome"/>
									</div>
									<div class="col-sm-5">
										<input type="email" class = "form-control required" name = "email" id = "email" placeholder = "Digite o e-mail"/>
									</div>									
									<span class="input-group-btn col-sm-2">
										<button class="btn btn-info" type = "submit" title = "Inserir novo cliente" alt = "Inserir novo cliente">
											<span class="glyphicon glyphicon-plus" ></span>
										</button>
									</span>
								</div>
				
							</form>
				
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
												<span class="glyphicon glyphicon-trash" tag = "<?php echo $cliente->codigo; ?>"></span>
											</a> 
											<a href="<?php echo site_url('/adm_cliente/editar/' . $cliente->codigo); ?>" title="Editar">
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
			

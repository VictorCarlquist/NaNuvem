				<section class = "col-sm-9" id = "content">
					<h1>Gerenciar Planos</h1>
					<form action="#" class="form-horizontal" id = "frm_pesquisa">
					   <div class="input-group">
					      <input type="text" class="form-control focusedInput" name = "pesquisa" id = "pesquisa" 
					      placeholder = "Digite a palavra chave para pesquisar o plano.">
					      <span class="input-group-btn">
					        <button class="btn btn-info" type="button" id = "btn_pesquisa"><span id="search" class="glyphicon glyphicon-search"></span></button>
					      </span>
					    </div><!-- /input-group -->

					</form>

					<form action="<?php echo site_url('adm_planos/insere_plano'); ?>" method = "post" class = "form-inline"
					id = "frm_cadastro">
							<div class="row">
								<div class="col-sm-3">
									<input type="text" class = "form-control required col-sm-5" name = "descricao" id = "descricao" placeholder = "Digite a descrição"/>
								</div>									
							
								<div class="col-sm-3">
									<input type="number" class = "form-control required col-sm-5" name = "valor" id = "valor" placeholder = "Digite o valor"/>							
								</div>
								<div class="col-sm-3">									
									<input type="number" class = "form-control required" name = "espaco" id = "espaco" placeholder = "Digite o espaço"/>									
								</div>
								<div class="col-sm-2">
									<span class="input-group-btn">
										<button class="btn btn-info" type = "submit" title = "Inserir novo plano" alt = "Inserir novo plano">
											<span class="glyphicon glyphicon-plus" ></span>
										</button>
									</span>
								</div>
							</div>
			
					</form>


					<table class="table">
						<tr>
							<th>#</th>
							<th>Descrição</th>
							<th>Valor</th>
							<th>Espaço</th>
							<th>Ações</th>
						</tr>
						<?php
							$cont = 1;
							foreach($planos as $plano)
							{
						?>
								<tr>
										<td><?php echo $cont; ?></td>
										<td><?php echo $plano->descricao; ?></td>
										<td><?php echo $plano->valor; ?></td>
										<td><?php echo $plano->espaco; ?></td>
										<td>
											<a href="#" title="Excluir">
												<span class="glyphicon glyphicon-trash" tag = "<?php echo $plano->codigo; ?>"></span>
											</a> 
											<a href="<?php echo site_url('/adm_planos/editar/' . $plano->codigo); ?>" title="Editar">
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
			
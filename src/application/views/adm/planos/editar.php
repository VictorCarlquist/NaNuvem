				<section class = "col-sm-9" id = "content">
					<h1>Editar Planos</h1>

					<form action="<?php echo site_url('adm_planos/editar_plano'); ?>" method = "post" 
					id = "frm_cadastro">
						<div class="form-group">
							<label for="descricao">Descrição</label>
							<input type="text" class="form-control required" id="descricao" name = "descricao" value = "<?php echo $planos->descricao; ?>" 
							placeholder="Digite a descrição do plano" />
						</div>
						<div class="form-group">
							<label for="valor">Valor</label>
						    <div class="input-group">
						      <input type="number" class="form-control required" id="valor" name = "valor" value = "<?php echo $planos->valor; ?>"
						      placeholder="Digite o valor do plano" />
						    </div>
						</div>
						<div class="form-group">
							<label for="espaco">Espaço</label>
							<input type="number" class="form-control required" id="espaco" name = "espaco" value = "<?php echo $planos->espaco; ?>"
							placeholder="Digite o espaço" />
						</div>
						<input type="hidden" name = "codigo" value = "<?php echo $planos->codigo; ?>">
						<button type="submit" class="btn btn-default" id = "btn_editar">Editar</button>
					</form>
			
				</section>
				
			

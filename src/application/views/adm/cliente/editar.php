				<section class = "col-sm-9" id = "content">
					<h1>Editar Clientes</h1>

					<form action="<?php echo site_url('adm_cliente/edita_cliente'); ?>" method = "post" 
					id = "frm_cadastro">
						<div class="form-group">
							<label for="nome">Nome</label>
							<input type="text" class="form-control required" id="nome" name = "nome" value = "<?php echo $clientes->nome; ?>" 
							placeholder="Digite o nome" />
						</div>
						<div class="form-group">
							<label for="email">E-mail</label>
						    <div class="input-group">
						      <div class="input-group-addon">@</div>
						      <input type="email" class="form-control required" id="email" name = "email" value = "<?php echo $clientes->email; ?>"
						      placeholder="Digite o e-mail" />
						    </div>
						</div>
						<div class="form-group">
							<label for="senha">Senha</label>
							<input type="password" class="form-control required" id="senha" name = "senha" placeholder="Digite sua senha" />
						</div>
						<div class="form-group">
							<label for="confirmacao">Confirma&ccedil;&atilde;o</label>
							<input type="password" class="form-control" id="confirmacao" 
							placeholder="Digite a confirma&ccedil;&atilde;o de senha" />
						</div>
						<input type="hidden" name = "codigo" value = "<?php echo $clientes->codigo; ?>">
						<button type="submit" class="btn btn-default" id = "btn_editar">Editar</button>
					</form>
			
				</section>
				<script type = "text/javascript">
					$("document").ready(function(){
						$("#frm_cadastro").submit(function(event){
							if($("#senha").val() != $("#confirmacao").val())
							{
								$.Zebra_Dialog('<strong>Senha e confirmação devem ser iguais!</strong>', {
									'type': 'error',
									'title': '',
									'onClose': function(){
										$("#senha").focus();	
									}
								});
								
								event.preventDefault();
							}
							else
								return true;

						});	
					});
					
				</script>
			

				<section class = "col-sm-9" id = "content">
					<h1>Editar Clientes</h1>

					<form action="" class="form-horizontal">
						<div class="form-group">
							<label for="nome">Nome</label>
							<input type="text" class="form-control" id="nome" value = "<?php echo $clientes->nome; ?>" 
							placeholder="Digite o nome" />
						</div>
						<div class="form-group">
							<label for="email">E-mail</label>
						    <div class="input-group">
						      <div class="input-group-addon">@</div>
						      <input type="email" class="form-control" id="email" value = "<?php echo $clientes->email; ?>"
						      placeholder="Digite o e-mail" />
						    </div>
						</div>
						<div class="form-group">
							<label for="senha">Senha</label>
							<input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
						</div>
						<div class="form-group">
							<label for="confirmacao">Confirma&ccedil;&atilde;o</label>
							<input type="password" class="form-control" id="confirmacao" 
							placeholder="Digite a confirma&ccedil;&atilde;o de senha">
						</div>
						<button type="submit" class="btn btn-default">Editar</button>
					</form>
			
				</section>
			

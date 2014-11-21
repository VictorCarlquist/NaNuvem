<nav class="nav-inicial">
	<div class="container">
		<div class="row">
			<div class="col-md-9" id="opcoes-menu">
				<div class="col-md-2">
					<a href="#">
						<span class="glyphicon glyphicon-upload"></span>
						Upload
					</a>
				</div>
				<div class="col-md-2">
					<a href="#">
						<span class="glyphicon glyphicon-download"></span>
						Download
					</a>
				</div>
				<div class="col-md-2">
					<a href="#">
						<span class="glyphicon glyphicon-trash"></span>
						Excluir
					</a>
				</div>
				<div class="col-md-2">
					<a href="#">
						<span class="glyphicon glyphicon-share"></span>
						Compartilhar
					</a>
				</div>
				<div class="col-md-2">
					<a href="#">
						<span class="glyphicon glyphicon-list-alt"></span>
						Planos
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="col-md-12">
					<form class="bs-example bs-example-form" role="form">
				    	<div class="input-group">
						    <input type="text" class="form-control">
					      	<span class="input-group-addon"> <span class="glyphicon glyphicon-search"></span> </span>
				    	</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</nav>

<section id="corpo">
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				<h2>Diretórios</h2>
				<ul class="list-group">
					<li>
						<span class="glyphicon glyphicon-plus"></span>
						<span class="glyphicon glyphicon-folder-close"></span>
						dir 1
					</li>
					<li>
						<span class="glyphicon glyphicon-minus"></span>
						<span class="glyphicon glyphicon-folder-open	"></span>
						dir 2
						<ul>
							<li>
								<span class="glyphicon glyphicon-plus"></span>
								<span class="glyphicon glyphicon-folder-close"></span>
								dir 2-1
							</li>
							<li>
								<span class="glyphicon glyphicon-plus"></span>
								<span class="glyphicon glyphicon-folder-close"></span>
								dir 2-2
							</li>
							<li>
								<span class="glyphicon glyphicon-minus"></span>
								<span class="glyphicon glyphicon-folder-open"></span>
								dir 2-3
								<ul>
									<li>
										<span class="glyphicon glyphicon-plus"></span>
										<span class="glyphicon glyphicon-folder-close"></span>
										dir 2-3-1
									</li>
								</ul>
							</li>
							<li>
								<span class="glyphicon glyphicon-plus"></span>
								<span class="glyphicon glyphicon-folder-close"></span>
								dir 2-4
							</li>
						</ul>
					</li>
					<li>
						<span class="glyphicon glyphicon-plus"></span>
						<span class="glyphicon glyphicon-folder-close"></span>
						dir 3
					</li>
					<li>
						<span class="glyphicon glyphicon-plus"></span>
						<span class="glyphicon glyphicon-folder-close"></span>
						dir 4
					</li>
				</ul>
			</div>
			<div id="tabela-arquivos" class="col-md-8">
				<table class="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Nome</th>
							<th>Tamanho</th>
							<th>Data</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><span class="glyphicon glyphicon-file"></span>
							<td>arquivo 1.doc</td>
							<td>10.8MB</td>
							<td>21/09/2014</td>
							<td>
								<a title="Download" href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a title="Excluir" href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a title="Compartilhar" href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-file"></span>
							<td>arquivo 2.pdf</td>
							<td>6.2MB</td>
							<td>25/09/2014</td>
							<td>
								<a title="Download" href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a title="Excluir" href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a title="Compartilhar" href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-picture"></span>
							<td>Imagem 1.jpg</td>
							<td>5.3MB</td>
							<td>03/10/2014</td>
							<td>
								<a title="Download" href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a title="Excluir" href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a title="Compartilhar" href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-music"></span>
							<td>Musica 1.mp3</td>
							<td>5.8MB</td>
							<td>18/09/2014</td>
							<td>
								<a href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-music"></span>
							<td>Música 2.mp3</td>
							<td>5.0MB</td>
							<td>04/09/2014</td>
							<td>
								<a href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-facetime-video"></span>
							<td>vídeo 1.mp4</td>
							<td>20.8MB</td>
							<td>05/11/2014</td>
							<td>
								<a href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-facetime-video"></span>
							<td>vídeo 2.wmv</td>
							<td>19.4MB</td>
							<td>08/11/2014</td>
							<td>
								<a href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
						<tr>
							<td><span class="glyphicon glyphicon-facetime-video"></span>
							<td>vídeo 3.avi</td>
							<td>34.9MB</td>
							<td>21/09/2014</td>
							<td>
								<a href="#"><span class="glyphicon glyphicon-download"></span></a>
								<a href="#"><span class="glyphicon glyphicon-trash"></span></a>
								<a href="#"><span class="glyphicon glyphicon-share"></span></a>
							</td>
						</tr>
					<tbody>
				</table>
			</div>
			<div class="col-md-2">
				<h2>Rótulos</h2>
				<p>Imagens (2)</p>
				<p>Vídeos (3)</p>
				<p>Áudios (2)</p>
				<p>Documentos (1)</p>
				<p>Faculdade (1)</p>
				<p>Trabalho (0)</p>
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
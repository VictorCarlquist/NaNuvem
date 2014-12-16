<script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="../js/nanuvem_base.js"></script>
<script type="text/javascript" src="../js/nanuvem_constant.js"></script>
<script type="text/javascript" src="../js/nanuvem_version.js"></script>
<script type="text/javascript" src="../js/nanuvem_file.js"></script>
<script type="text/javascript" src="../js/nanuvem_dir.js"></script>
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
				<ul class="list-group" id='diretorios'>
				<script>


					function deleteFile(codigo, codigo_diretorio)
			        {
			            DM.deleteFile(codigo, codigo_diretorio);
			        }

			        function getVersions(codigo, codigo_diretorio)
			        {
			            DM.getVersions(codigo, codigo_diretorio);
			        }

			        var dados;
			        var string = "";

			        var contador = 0;

			        function printDir(dir, i, tab, ultimotab)
			        {
			            var space = "";
						if(tab > 0)
						{
							if(i == 0 && contador != 0)
							{
								space+= '<ul>';	
							}
							contador++;
							space+= '<li id="'+ dir.id +'">';
				            space+= '<span class="glyphicon glyphicon-plus"></span>';
							space+= '<span class="glyphicon glyphicon-folder-close"></span>';
							space+= dir.name;

							if(ultimotab == 1)
			            	{
			            		space+= '</ul>'
			            	}
			            	if(ultimotab == 1)
			            	{
								space+= '</li>';
							}
		            	}
			            dados += space;
			            
			            if(!dir.dirs)
			                return;

			            for (var i = 0; i < dir.dirs.length; i++)
			            {
			            	var verifica = 0;
			            	if(i == dir.dirs.length-1)
			            	{
			            		verifica = 1;
			            	}
			                printDir(dir.dirs[i], i, tab+1, verifica);
			            }
			        }

			        function printFile(files)
			        {
			        	for (var j = 0; j < files.length; j++) {
		                	var fileatual = files[j];
		                	//string+= "<a href='javascript:deleteFile("+fileatual.id+","+ fileatual.id_dir+");'>" + fileatual.name + "</a> <br>";
		                	if(fileatual.ext == "txt" || fileatual.ext == "doc" || fileatual.ext == "docx" || fileatual.ext == "pdf" || fileatual.ext == "odt")
		                		var icone = '<span class="glyphicon glyphicon-file"></span>';
		                	if(fileatual.ext == "jpg" || fileatual.ext == "png" || fileatual.ext == "gif" || fileatual.ext == "bmp" || fileatual.ext == "jpeg" || fileatual.ext == "tif" || fileatual.ext == "dib")
		                		var icone = '<span class="glyphicon glyphicon-picture"></span>';

		                	string += "<tr id='" + fileatual.id + "," + fileatual.id_dir + "'>";
		                		string += "<td>";
		                			string += icone;
		                		string += "</td>";
		                		string += "<td>";
		                			string += fileatual.name + "." + fileatual.ext;
		                		string += "</td>";
		                		string += "<td>";
		                			string += fileatual.size;
		                		string += "</td>";
		                		string += "<td>";
		                			string += fileatual.date_time;
		                		string += "</td>";
		                		string += "<td>";
		                			string += '<a title="Download" href="#"><span class="glyphicon glyphicon-download"></span></a>';
		                			string += '<a title="Excluir" href="#"><span class="glyphicon glyphicon-trash"></span></a>';
		                			string += '<a title="Compartilhar" href="#"><span class="glyphicon glyphicon-share"></span></a>';
		                		string += "</td>";
		                	string += "</tr>";
		                };
			            
			            return;
			        }

			        var DM = new NANUVEM.DirectoryManager(
				        function (data, type, obj) {
				            // Este if apenas será chamado na primeira vez que o site 
				            // for carredo. Ele irá carregar todos os diretórios, sem
				            // os arquivos, para criar a "arvore de diretórios".
				            if (type == NANUVEM.TYPE_DIRECTORY) {
				                
				                // Exemplo de acesso aos diretorios (hierarquia)
				                dados = " ";
				                printDir(DM.dirs[0], -1, 0, 0); // root "/"
				                document.getElementById("diretorios").innerHTML = dados;
				                
				                // Campos dirs[0]
				                // 'id_client', 
				                // 'id', 
				                // 'id_father'
				                // 'name'
				                // dirs: []
				                // files: []



				               	//var pai = $("#" + evento).parent('ul').attr("id");


								$( document ).on( "click", "li", function(event) {
									
				                	var id = $(this).attr("id");
									evento = $(event.target);
									evento = evento.attr("id");
				                	var display = $("#"+ evento +" > ul").attr("style");

				                	if(id == evento)
									{
					                	if(display == "display: none;")
					                	{
											$("#"+ evento +" > ul").css("display", "block");
											$("#"+id).children("span").removeClass("glyphicon-plus");
											$("#"+id).children("span").addClass("glyphicon-minus");
											$("#"+id).children("span:last").removeClass("glyphicon-folder-close");
											$("#"+id).children("span:last").addClass("glyphicon-folder-open");
					                	}
										else if(display == "display: block;")
										{
											$("#"+ evento +" > ul").css("display", "none");
											$("#"+id).children("span").removeClass("glyphicon-minus");
											$("#"+id).children("span").addClass("glyphicon-plus");
											$("#"+id).children("span:last").removeClass("glyphicon-folder-open");
											$("#"+id).children("span:last").addClass("glyphicon-folder-close");
										}
									}

								});

								$( document ).on( "click", "li", function(event) {
									evento = $(event.target);
					                DM.changeDirectory(evento.attr("id"));
								});

								$("li ul").each(function(){
									$(this).css("display", "none");	
								});

				                
				            }
				            // Este if será chamado quando:
				            // 1 - A função |changeDirectory| for chamada (arquivos carregados)
				            // 2 - Um arquivo sofrer modificações (delete, move)
				            if (type == NANUVEM.TYPE_FILE) {

				                // Campos files[0]
				                // id :1
				                // id_dir:2
				                // name:"nome"
				                // ext:"txt"
				                
				                string = "";
				                printFile(obj.files); // root "/"
				                
				                document.getElementById("arquivos-tabela").innerHTML = string;
				                
				            }
				            // Quando este if for verdadeiro, o parametro |obj| será o 
				            // arquivo que recebeu as versões
				            if (type == NANUVEM.TYPE_VERSIONS) {
				                // Campos do versions []
				                // "id"
				                // "id_file"
				                // $this->db->select("situacao as status"
				                // "date_time"
				                // "size"
				                // "id_client"
				                // "as id_dir"
				                // "name"
				                // "ext"
				                alert(obj.versions[0].size);
				            }

				            // Quando este if for verdadeiro, o parametro |obj| será 
				            // a versão com os comentários preenchidos
				            if (type == NANUVEM.TYPE_VERSION_COMMENTS) {
				                // Campos do comments []
				                // "id"
				                // "id_version"
				                // "text"
				                // "date_time"
				                alert(obj.comments[0].texto);
				            }
				        }, 1
				    );

					

					
					$( document ).on( "click", "tr", function() {
						evento = $(event.target);
						if(evento.attr("class") == "glyphicon glyphicon-download"){
							alert("hahaha");
						}
						else if(evento.attr("class") == "glyphicon glyphicon-trash"){
							var verifica = confirm("Tem certeza que deseja apagar este arquivo?");

							if(!verifica)
								return;

							var s = $(this).attr("id").split(",");
							var codigo = s[0];
							var codigo_diretorio = s[1];
							DM.deleteFile(codigo, codigo_diretorio);
						}
						else if(evento.attr("class") == "glyphicon glyphicon-share"){
							alert("hihihi");
						}

					});

					// $( document ).on( "click", "li", function() {
						
		   //              DM.changeDirectory($(this).attr("id"));
					// });

					
							
		
        		</script>
					
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
					<tbody id="arquivos-tabela">
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
			</div><!--fecha a row do menu e conteudo-->
		</div><!--fecha container do menu e conteudo -->
		<div class="container">
			<footer class="row footer">
				<div class = "col-sm-12">
					<span class="glyphicon glyphicon-copyright-mark"></span> 6º Módulo TADS 
				</div>
			</footer>
		</div>	

		<script type = "text/javascript">

			$("document").ready(function(){
				$(".glyphicon.glyphicon-trash").click(function(){
					$.Zebra_Dialog('<strong>Deseja realmente excluir o cliente selecionado?</strong>', {
						'type': 'question',
						'title': '',
						'buttons': ['Sim', 'Não'],
						'onClose': function(caption) {
							if (caption == 'Sim') {
								alert("Excluido");
							}
						}
					});
				});
				
			});
		</script>
	</body>

</html>


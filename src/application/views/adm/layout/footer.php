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


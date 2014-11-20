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

				$("#pesquisa").focus();

				$(".glyphicon.glyphicon-trash").click(function(){
					codigo = $(this).attr('tag');
					
					$.Zebra_Dialog('<strong>Deseja realmente excluir o registro selecionado?</strong>', {
						'type': 'question',
						'title': '',
						'buttons': ['Sim', 'Não'],
						'onClose': function(caption) {
							if (caption == 'Sim') {
								window.location.href = "<?php echo site_url($modulo . '/excluir'); ?>/" + codigo;
							}
						}
					});
				});

				$("#btn_pesquisa").click(function(){
					var pesquisa = $("#pesquisa").val();					
					window.location.href = "<?php echo site_url($modulo . '/listar'); ?>/" + pesquisa;
				});

				$("#frm_pesquisa").submit(function(event){
					$("#btn_pesquisa").click();
					event.preventDefault();
				});

				$("#frm_cadastro").submit(function(event){

						var inputs = $(".required");
						var required = false;
						var element_required = null;

						/* validação de campos obrigatórios */	

						$.each(inputs, function(key, element){								

							if(element.value.trim() == "")
							{
								element_required = element;
								required = true;
								return false;
							}
						});

						if(required == true)
						{
							$.Zebra_Dialog('<strong>Campo de preenchimento obrigatório!</strong>', 
							{
								'type': 'error',
								'title': '',
								'onClose':function(){
									element_required.focus();
									return false;	
								}
							});


							event.preventDefault();
						}


						/* validação de campos numéricos para navegadores antigos que não suportam campos number*/	
						var element_validate = null;

						$.each($("input[type=number]"), function(key, element){

							if(isNaN(element.value))
							{

								element_validate = element;
								return false;
							}

						});

						if(element_validate != null)
						{
							$.Zebra_Dialog('<strong>Valor digitado deve ser um número!</strong>', 
								{
									'type': 'error',
									'title': '',
									'onClose':function(){
										element_validate.focus();
										return false;	
									}
								});


								event.preventDefault();
						}

				});	
			
			});
		</script>
	</body>

</html>


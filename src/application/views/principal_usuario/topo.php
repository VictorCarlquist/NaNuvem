<header class="topo-inicial">
	<div class="container">
		<div class="row">
			<div class="col-sm-6" id="logo-inicial"><span class="nanuvem-logo"></span></div>
			<div class="col-sm-6 dropdown">
				<a href="#" id="icone-usuario" class="dropdown-toggle" data-toggle="dropdown">
					<span class="fa-stack fa-lg pull-right">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-user fa-stack-1x fa-inverse"></i>
					</span>
				</a>
				<ul class="dropdown-menu pull-right" role="menu">
					<li> <a href="<?php echo site_url('perfil/index'); ?>">Perfil</a></li>
					<li> <a href="<?php echo site_url('page/sair'); ?>">Sair</a></li>
				</ul>
			</div>
		</div>
	</div>
</header>

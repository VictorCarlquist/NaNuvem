<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adm_Planos extends CI_Controller {


	public function listar($pesquisa = null)
	{
		$this->load->model('PlanosModel', 'planos');

		if(!$pesquisa)
			$planos = $this->planos->get();
		else
			$planos = $this->planos->get_descricao($pesquisa);

		$dados = array(
			'planos' => $planos
		);
		
		$modulo = array('modulo' => 'adm_planos');

		$this->load->view('adm/layout/header');
		$this->load->view('adm/layout/menu');
		$this->load->view('adm/planos/listar', $dados);
		$this->load->view('adm/layout/footer', $modulo);

	}
	
	public function editar($codigo = NULL)
	{
		if(!$codigo)
			redirect('/adm_planos/listar');
		else
		{
			$this->load->model('PlanosModel', 'planos');
			
			$planos = $this->planos->get($codigo);

			$dados = array('planos' => $planos);
			$modulo = array('modulo' => 'adm_planos');				

			$this->load->view('adm/layout/header');
			$this->load->view('adm/layout/menu');
			$this->load->view('adm/planos/editar', $dados);
			$this->load->view('adm/layout/footer', $modulo);
		}	
	}

	public function editar_plano()
	{

		$this->load->model('PlanosModel', 'planos');

		$dados = array(
			'codigo' => $this->input->post('codigo'),
			'descricao' => $this->input->post('descricao'),
			'valor' => $this->input->post('valor'),
			'espaco' => $this->input->post('espaco')
		);

		$result = $this->planos->editar($dados);


		if($result)
		{
			redirect('/adm_planos/listar/');
		}
		else
			redirect('/adm_planos/editar/' . $dados['codigo']);

	}

	public function insere_plano()
	{

		$this->load->model('PlanosModel', 'planos');

		$dados = array(
			'descricao' => $this->input->post('descricao'),
			'valor' => $this->input->post('valor'),
			'espaco' => $this->input->post('espaco')
		);

		$result = $this->planos->insere($dados);


		redirect('/adm_planos/listar/');		

	}

	public function excluir($codigo)
	{
		if(!$codigo)
			redirect('/adm_planos/listar');
		else
		{
			$this->load->model('PlanosModel', 'planos');
			
			$planos = $this->planos->excluir($codigo);

			redirect('/adm_planos/listar');

		}
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
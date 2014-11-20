<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adm_Cliente extends CI_Controller {


	public function listar($pesquisa = null)
	{
		$this->load->model('ClienteModel', 'clientes');

		if(!$pesquisa)
			$clientes = $this->clientes->get();
		else
			$clientes = $this->clientes->get_nome($pesquisa);

		$dados = array(
			'clientes' => $clientes
		);
		
		$modulo = array('modulo' => 'adm_cliente');

		$this->load->view('adm/layout/header');
		$this->load->view('adm/layout/menu');
		$this->load->view('adm/cliente/listar', $dados);
		$this->load->view('adm/layout/footer', $modulo);

	}
	
	public function editar($codigo = NULL)
	{
		if(!$codigo)
			redirect('/adm_cliente/listar');
		else
		{
			$this->load->model('ClienteModel', 'clientes');
			
			$clientes = $this->clientes->get($codigo);

			$dados = array('clientes' => $clientes);
			$modulo = array('modulo' => 'adm_cliente');				

			$this->load->view('adm/layout/header');
			$this->load->view('adm/layout/menu');
			$this->load->view('adm/cliente/editar', $dados);
			$this->load->view('adm/layout/footer', $modulo);
		}	
	}

	public function edita_cliente()
	{

		$this->load->model('ClienteModel', 'clientes');

		$dados = array(
			'codigo' => $this->input->post('codigo'),
			'nome' => $this->input->post('nome'),
			'email' => $this->input->post('email'),
			'senha' => $this->input->post('senha')
		);

		$result = $this->clientes->editar($dados);


		if($result)
		{
			redirect('/adm_cliente/listar/');
		}
		else
			redirect('/adm_cliente/editar/' . $dados['codigo']);

	}

	public function insere_cliente()
	{

		$this->load->model('ClienteModel', 'clientes');

		$dados = array(
			'nome' => $this->input->post('nome'),
			'email' => $this->input->post('email'),
			'senha' => '123_Mudar'
		);

		$result = $this->clientes->insere($dados);


		redirect('/adm_cliente/listar/');		

	}

	public function excluir($codigo)
	{
		if(!$codigo)
			redirect('/adm_cliente/listar');
		else
		{
			$this->load->model('ClienteModel', 'clientes');
			
			$clientes = $this->clientes->excluir($codigo);

			redirect('/adm_cliente/listar');

		}
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
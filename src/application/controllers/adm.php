<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adm extends CI_Controller {
	
	public function cliente()
	{
		$this->load->model('ClienteModel', 'clientes');

		$clientes = $this->clientes->get();
		$dados = array('clientes' => $clientes);
		
		$this->load->view('adm/layout/header');
		$this->load->view('adm/layout/menu');
		$this->load->view('adm/cliente/listar', $dados);
		$this->load->view('adm/layout/footer');

	}
	
	public function editar_cliente($codigo = NULL)
	{
		if(!$codigo)
			redirect('/adm/cliente');
		else
		{
			$this->load->model('ClienteModel', 'clientes');
			
			$clientes = $this->clientes->get($codigo);

			$dados = array('clientes' => $clientes);
				
			$this->load->view('adm/layout/header');
			$this->load->view('adm/layout/menu');
			$this->load->view('adm/cliente/editar', $dados);
			$this->load->view('adm/layout/footer');
		}	
	}

	public function excluir_cliente($codigo = NULL)
	{
		if(!$codigo)
			redirect('/adm/cliente');
		else
		{
			$this->load->model('ClienteModel', 'clientes');
			
			$clientes = $this->clientes->excluir($codigo);

			redirect('/adm/cliente');

		}
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
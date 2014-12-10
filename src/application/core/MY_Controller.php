<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller {
	
	var $usuario;

	private function CheckLog($is_home){
		$this->load->library('session');
		/**
			Verifica se existe um usuário no array da sessão
			caso exista, o atributo $usuario é setado
			Para verificar se ele esta ativo na sessão use isset($this->usuario)
		**/
		if($this->session->userdata('usuario')){
			$this->usuario = $this->session->userdata('usuario');
		} else {
			if (!$is_home) {
				redirect(site_url());
			}
		}

	}

   	public function __construct($is_home = false)
   	{
        parent::__construct();

     	$this->CheckLog($is_home);
   	}

}


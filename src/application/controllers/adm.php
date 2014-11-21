<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adm extends CI_Controller {

	public function index()
	{
		
		$modulo = array('modulo' => 'administracao');

		$this->load->view('adm/layout/header');
		$this->load->view('adm/layout/menu');
		$this->load->view('adm/index');
		$this->load->view('adm/layout/footer', $modulo);

	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
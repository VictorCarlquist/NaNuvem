<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Adm extends CI_Controller {
	
	public function cliente()
	{
		$this->load->view('adm/layout/header');
		$this->load->view('adm/cliente');
		$this->load->view('adm/layout/footer');
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
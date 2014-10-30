<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Page extends CI_Controller {
	
	public function index()
	{
		$this->load->view('layout/header');
		$this->load->view('home');
		$this->load->view('layout/footer');
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
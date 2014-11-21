<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Principal_Usuario extends CI_Controller 
{	
	public function index()
	{
		$this->load->view('layout/header');
		$this->load->view('principal_usuario/topo');
		$this->load->view('principal_usuario/corpo');
		$this->load->view('layout/footer');
	}
}

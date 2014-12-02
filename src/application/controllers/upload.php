<?php

class Upload extends CI_Controller{
	
	function __construct()
	{
		parent::__construct();
		$this->load->helper(array('form', 'url'));
	}
	
	function index()
	{
		$this->load->view('upload_form', array('error' => ' ' ));
	}

	function do_upload()
	{

		$upload_path = APPPATH."uploads";
		if (!file_exists($upload_path)) mkdir($upload_path);

		$config['upload_path'] = $upload_path;
		$config['allowed_types'] = 'jpeg|png|gif|jpg';
		
		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload("fileuser"))
		{
			$error = array('error' => $this->upload->display_errors());
			
			$this->load->view('upload_form', $error);
		}	
		else
		{
			$data = array('upload_data' => $this->upload->data());
			$this->load->view('upload_success', $data);
			redirect(site_url("index.php/adm/aula_desenvolver/".$codigo));
		}
	}	
}
?>
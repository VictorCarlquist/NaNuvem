<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Page extends CI_Controller {
	


	public function index()
	{
        $this->output->enable_profiler(TRUE);

        $this->load->model('plano_model', 'Planos');

        $planos = $this->Planos->getAll();
        $data = array('planos' => $planos);

		$this->load->view('layout/header');
		$this->load->view('home', $data);
		$this->load->view('layout/footer');
	}
}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_manager extends CI_Controller 
{   
    public function index()
    {
        $this->output->enable_profiler(TRUE);
        $this->load->model('Directory_model', 'Directory');

        //TODO : pegar o código do cliente na sessão
        $result = $this->Directory->get_directories(1);
        
        echo json_encode($result);
    }
}

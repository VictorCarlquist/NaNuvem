<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_manager extends CI_Controller 
{   
    public function get_directories()
    {
        $this->load->model('Directory_model', 'Directory');

        //TODO : pegar o código do cliente na sessão
        $result = $this->Directory->get_directories(1);
        echo '{"dirs":'.json_encode($result).'}';
    }

    public function get_files()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_dir = $this->input->post('id');
        $result = $this->Directory->get_files($cod_dir);

        echo '{"files":'.json_encode($result).'}';
    }

    public function delete_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $cod_file = 1;
        $this->Directory->delete_file($cod_file);
    }

}

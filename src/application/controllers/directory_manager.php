<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_manager extends CI_Controller 
{   

    public function get_files()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_dir = $this->input->post('id');
        $result = $this->Directory->get_files($cod_dir);

        echo '{"files":'.json_encode($result).'}';
    }

    public function get_versions()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_arq = $this->input->post('id');
        $result = $this->Directory->get_versions($cod_arq);

        echo '{"versions":'.json_encode($result).'}';
    }

    public function delete_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $this->Directory->delete_file($cod_file);
    }

    public function move_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $to_cod_dir = $this->input->post('to');
        $this->Directory->move_file($cod_file, $to_cod_dir);
    }

    public function rename_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $new_name = $this->input->post('name');
        $this->Directory->rename_file($cod_file, $new_name);
    }

    public function get_comments()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_version = $this->input->post('id');
        $result = $this->Directory->get_comments($cod_version = 1);

        echo '{"comments":'.json_encode($result).'}';
    }

    public function get_directories()
    {
        $this->load->model('Directory_model', 'Directory');

        //TODO : pegar o código do cliente na sessão
        $result = $this->Directory->get_directories(1);
        echo '{"dirs":'.json_encode($result).'}';
    }

    public function rename_dir()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_dir = $this->input->post('id');
        $new_name = $this->input->post('name');
        $this->Directory->rename_dir($cod_dir, $new_name);
    }
}

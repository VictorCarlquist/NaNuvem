<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_manager extends MY_Controller
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

    public function delete_version()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_version = $this->input->post('id');
        $this->Directory->delete_version($cod_version);
        echo '{}';
    }

    public function delete_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $this->Directory->delete_file($cod_file);
        echo '{}';
    }

    public function delete_comment()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_comment = $this->input->post('id');
        $this->Directory->delete_comment($cod_comment);
        echo '{}';
    }

    public function move_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $to_cod_dir = $this->input->post('to');
        $this->Directory->move_file($cod_file, $to_cod_dir);
        echo '{}';
    }

    public function rename_file()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_file = $this->input->post('id');
        $new_name = $this->input->post('name');
        $this->Directory->rename_file($cod_file, $new_name);
        echo '{}';
    }

    public function get_comments()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_version = $this->input->post('id');
        $result = $this->Directory->get_comments($cod_version);

        echo '{"comments":'.json_encode($result).'}';
    }

    public function get_directories()
    {
        $this->load->model('Directory_model', 'Directory');

        //TODO : pegar o código do cliente na sessão
        $this->load->library('session');
        $result = $this->Directory->get_directories($this->session->userdata['usuario']['codigo']);
        echo '{"dirs":'.json_encode($result).'}';
    }

    public function rename_dir()
    {
        $this->load->model('Directory_model', 'Directory');

        $cod_dir = $this->input->post('id');
        $new_name = $this->input->post('name');
        $this->Directory->rename_dir($cod_dir, $new_name);
        echo '{}';
    }
}

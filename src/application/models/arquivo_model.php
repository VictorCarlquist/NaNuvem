<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Arquivo_model extends CI_Model {
    
    /*
     * Insere o usuario na base de dados
    */
    public function insert()
    {
        $id_dir = $this->input->post('id_dir');

        do_upload($id_dir);
        $data = array(
            'codigo_diretorio' => $id_dir,
            'nome' => $this->nome,
            'extensao' => $this->extensao,            
        );

        $this->db->insert('arquivos', $data);
        return $this->db->get_where($data)->row();
    }

    function do_upload($codDir = null)
    {

        $upload_path = APPPATH."uploads";
        if (!file_exists($upload_path)) mkdir($upload_path);

        $config['upload_path'] = $upload_path;
        $config['allowed_types'] = 'jpeg|png|gif|jpg|pdf|doc|docx|txt|xls|xlsx|zip|rar';
                
        $this->load->library('upload', $config);

        $_FILES['inputfile']['name'];
        $config['file_name'] = 0 // id;

        if ( ! $this->upload->do_upload("fileuser"))
        {
            $error = array('error' => $this->upload->display_errors());
            
            $this->load->view('upload_form', $error);
        }   
        else
        {
            $data = array('upload_data' => $this->upload->data());
            $this->load->view('upload_success', $data);
            $this->load->model('Arquivo_model', 'NovoArquivo');
            $this->NovoArquivo->codigo_diretorio = $codDir;
            $this->NovoArquivo->nome = $this->upload->data()['raw_name'];
            $this->NovoArquivo->extensao = $this->upload->data()['file_ext'];
            
            $this->NovoArquivo->insert();       
        }
    }

    public function save_version($cod_arq, $info, $cod_cliente)
    {

        $this->db->query("update versoes set situacao = 0 ,data_hora = (select now()), tamanho =".$info['file_size']. "codigo_cliente =".$cod_cliente." where codigo_arquivo =".$cod_arq."");
    }
}
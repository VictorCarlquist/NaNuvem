<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_model extends CI_Model {

    public function get_directories($cod_cliente)
    {
        $where = array('codCliente' => $cod_cliente);
        $query = $this->db->get_where('listDirsFromClients', $where);
        return $query->result();
    }

    public function get_files($cod_diretorio)
    {
        $where = array('codigo_diretorio' => $cod_diretorio);
        $query = $this->db->get_where('arquivos', $where);
        return $query->result();
    }

    public function delete_file($cod_arq)
    {
        // TODO : Consertar isso!
        $this->db->delete('versoes', array('codigo_arquivo' => $cod));
        $this->db->delete('arquivos', array('codigo' => $cod)); 
    }

    public function get_versions($cod_arq)
    {
        // select * from versoes inner join arquivos on 
        // versoes.codigo_arquivo=arquivos.codigo where codigo_arquivo=1;
        $this->db->select('*');
        $this->db->from('versoes');
        $this->db->join('arquivos', 'versoes.codigo_arquivo = arquivos.codigo');
        $this->db->where('codigo_arquivo', $cod_arq);
        
        $query = $this->db->get();
        return $query->result();
    }

    public function move_file($cod_arq, $to_cod_dir)
    {
        $data = array('codigo_diretorio' => $to_cod_dir);
        $this->db->where('codigo', $cod_arq);
        $this->db->update('arquivos', $data);
    }

    public function rename_file($cod_arq, $new_name)
    {
        $data = array('nome' => $new_name);
        $this->db->where('codigo', $cod_arq);
        $this->db->update('arquivos', $data);
    }

    public function get_comments($cod_versao)
    {
        $where = array('codigo_versao' => $cod_versao);
        $query = $this->db->get_where('comentarios', $where);
        return $query->result();
    }
}

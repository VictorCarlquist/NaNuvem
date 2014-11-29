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

    public function delete_file($cod)
    {
        // TODO : Consertar isso!
        $this->db->delete('versoes', array('codigo_arquivo' => $cod));
        $this->db->delete('arquivos', array('codigo' => $cod)); 
    }
}
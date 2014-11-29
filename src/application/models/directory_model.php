<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Directory_model extends CI_Model {

    public function get_directories($cod_cliente)
    {
        $where = array('codCliente' => $cod_cliente);
        $query = $this->db->get_where('listDirsFromClients', $where);
        return $query->result();
    }
}
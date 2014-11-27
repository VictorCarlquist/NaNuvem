<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 

class DirModel extends CI_Model {
    var $codigo = NULL;
    var $codigo_cliente;
    var $diretorio_pai;
    var $nome; 

    public function get($id_user)
    {
        
        if(!$codigo)
        {
            $query = $this->db->get('clientes');
            return $query->result();                
        }
        else
        {
            $where = array('codigo' => $codigo);
            $query = $this->db->get_where('clientes', $where);

            return $query->row();
        }
    }
}
?>

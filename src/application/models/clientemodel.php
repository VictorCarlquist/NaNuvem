<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 

	class ClienteModel extends CI_Model {
		var $codigo = NULL;
		var $nome;
		var $senha;
		var $email;	
	
		public function get($codigo = NULL)
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

		public function excluir($codigo)
		{
			$where = array('codigo' => $codigo);
			$query = $this->db->delete('clientes', $where);

			return $query->row();
		}
	}
?>
<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 

	class PlanosModel extends CI_Model {
		var $codigo = NULL;
		var $descricao;
		var $valor;
		var $espaco;	
	
		public function get($codigo = NULL)
		{
			$this->db->order_by('descricao');

			if(!$codigo)
			{
				$query = $this->db->get('planos');
				return $query->result();				
			}
			else
			{
				$where = array('codigo' => $codigo);
				$query = $this->db->get_where('planos', $where);

				return $query->row();
			}
		}

		public function get_descricao($pesquisa)
		{
			$this->db->order_by('descricao');

			if(!$pesquisa)
				redirect('/adm_planos/listar');
			else
			{
				$this->db->like('descricao', $pesquisa);
				$query = $this->db->get('planos');
				return $query->result();
			}
		}

		public function excluir($codigo)
		{
			$this->db->where('codigo', $codigo);
			$result = $this->db->delete('planos');

			return $result;
		}

		public function editar($dados)
		{
			$this->db->where('codigo', $dados['codigo']);

			$result = $this->db->update('planos', $dados);

			if(!$result)
				return false;
			else
				return $this->db->affected_rows();
		}

		public function insere($dados)
		{
			
			$result = $this->db->insert('planos', $dados);

			if(!$result)
				return false;
			else
				return $this->db->affected_rows();
		}
	}
?>
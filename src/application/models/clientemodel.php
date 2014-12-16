<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 

	class ClienteModel extends CI_Model {
		var $codigo = NULL;
		var $nome;
		var $senha;
		var $email;	
	
		public function getClient()
		{
			$where = array(
				'email' => $this->email,
				'senha' => $this->senha
				);
			$query = $this->db->get_where('clientes', $where);

			return $query->row();
		}

		public function get($codigo)
		{
			$this->db->order_by('nome');

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

		public function get_nome($pesquisa)
		{
			$this->db->order_by('nome');

			if(!$pesquisa)
				redirect('/adm_cliente/listar');
			else
			{
				$this->db->like('nome', $pesquisa);
				$query = $this->db->get('clientes');
				return $query->result();
			}
		}

		public function excluir($codigo)
		{
			$this->db->where('codigo', $codigo);
			$result = $this->db->delete('clientes');

			return $result;
		}

		public function editar($dados)
		{
			$this->db->where('codigo', $dados['codigo']);

			$result = $this->db->update('clientes', $dados);

			if(!$result)
				return false;
			else
				return $this->db->affected_rows();
		}

		public function insere($dados)
		{
			
			$result = $this->db->insert('clientes', $dados);

			if(!$result)
				return false;
			else
				return $this->db->affected_rows();
		}
	}
?>
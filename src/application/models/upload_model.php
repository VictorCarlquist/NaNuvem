<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 

	class Upload_model extends CI_Model {

		var $codigo = NULL;
		var $codigo_diretório;
		var $nome;
		var $extensao;

		public function save_file($info, $cod_dir)
		{
			$data  = array(
				'codigo_diretorio' =>$cod_dir,
				'nome'=>$info['raw_name'], 
				'extensao'=> $info['file_ext']
				 );	

			$this->db->insert('arquivos', $data);
			return $this->db->insert_id();
		}
		



	}
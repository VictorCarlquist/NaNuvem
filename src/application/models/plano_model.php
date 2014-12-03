<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Plano_model extends CI_Model {
    var $codigo = NULL;
    var $descricao ='';
    var $valor ='';
    var $espaco ='';
    var $nome ='';


    public function search()
    {
        $where = array();

        if ($this->codigo)
            $where['codigo'] = $this->codigo;
        if ($this->descricao)
            $where['descricao'] = $this->descricao;
        if ($this->valor)
            $where['valor'] = $this->valor;
        if ($this->espaco)
            $where['espaco'] = $this->espaco;
        if ($this->nome)
            $where['nome'] = $this->nome;


        

        $query = $this->db->get_where('planos', $where);
        return $query->result();
    }

/* Retorna um unico objeto a partir dos atributos usados
 * 
*/
    public function get()
    {
        $resultados = $this->search();
        
        if(!empty($resultados))
            return $this->search()[0];
        else
            return null;
    }
    

/* Retorna todos os usuarios da tabela em forma de array
 * 
*/
    public function getAll()
    {
        $query = $this->db->get('planos');
        return $query->result();    
    }


/*
 * Insere o usuario na base de dados
*/
    public function insert()
    {
        $data = array(
            'descricao' => $this->descricao,
            'valor' => $this->valor,
            'espaco' => $this->espaco,
            'nome' => $this->nome
        );

        $this->db->insert('planos', $data);
    }

    public function update()
    {
        $data = array();

        if ($this->descricao)
            $data['descricao'] = $this->descricao;
        if ($this->valor)
            $data['valor'] = $this->valor;
        if ($this->espaco)
            $data['espaco'] = $this->espaco;
        if ($this->nome)
            $data['nome'] = $this->nome;

        $this->db->where('codigo', $this->codigo);
        $this->db->update('planos', $data);
    }

    public function delete()
    {
        $where = array();
        
        if ($this->codigo)
            $where['codigo'] = $this->codigo;
        if ($this->descricao)
            $where['descricao'] = $this->descricao;
        if ($this->valor)
            $where['valor'] = $this->valor;
        if ($this->espaco)
            $where['espaco'] = $this->espaco;
        if ($this->nome)
            $where['nome'] = $this->nome;

        $this->db->delete('planos', $where); 

    }
    
    public function like($parametro_especifico)
    {
        $parametro = $parametro_especifico;
        $this->db->like('descricao', $parametro);
        $this->db->or_like('valor', $parametro);
        $resultado = $this->db->get_where('planos');
        
        return $resultado->result();
    }

    public function join($tabela)
    {
        $base = $this->get();

        if(isset($tabela['grupo']))
        {
            $this->load->model("grupo_model", "Grupo");
            $this->Plataforma->codigo = $base->codigo_plataforma;

            if (is_array($tabela['grupo']))
                $grupo = $this->Grupo->join($tabela['grupo']);
            else
                $grupo = $this->Grupo->search();

            $base->grupo =  $grupo;
        }
        if(isset($tabela['auditoria']))
        {
            $this->codigo = $base->codigo_pai;
            
            if (is_array($tabela['auditoria']))
                $auditoria = $this->join($tabela['auditoria']);
            else
                $auditoria = $this->search();

            $base->auditoria = $auditoria;
        }

        return $base;
    }
    
}
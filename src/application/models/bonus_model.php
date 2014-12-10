<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Plano_model extends CI_Model {
    var $codigo = NULL;
    var $nome ='';
    var $quantidade_espaco  = NULL;
    var $codigo_acao  = NULL;


/** Retorna um array a partir dos atributos usados
 * 
 * Exemplo de uso:
 *
 * $this->load->model("usuario_model", "Objeto");
 * $this->Objeto->codigo = 1;
 * $resultado = $this->Objeto->search();
 * 
**/
    public function search()
    {
        $where = array();

        if ($this->codigo)
            $where['codigo'] = $this->codigo;
        if ($this->descricao)
            $where['nome'] = $this->nome;
        if ($this->nome)
            $where['quantidade_espaco'] = $this->quantidade_espaco;
        if ($this->quantidade_espaco)
            $where['senha'] = $this->senha;
        if ($this->codigo_acao)
            $where['codigo_acao'] = $this->codigo_acao;

        $query = $this->db->get_where('bonus', $where);
        return $query->result();
    }

/* Retorna um unico objeto a partir dos atributos usados
 * 
 * Exemplo de uso:
 *
 * $this->load->model("usuario_model", "Objeto");
 * $this->Objeto->codigo = 1;
 * $resultado = $this->Objeto->get();
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
 * Exemplo de uso:
 *
 * $this->load->model("usuario_model", "Objeto");
 * $resultado = $this->Objeto->getAll();
 * 
*/
    public function getAll()
    {
        $query = $this->db->get('bonus');
        return $query->result();    
    }


/*
 * Insere o usuario na base de dados
*/
    public function insert()
    {
        $data = array(
            'codigo' => $this->codigo,
            'nome' => $this->nome,
            'quantidade_espaco' => $this->quantidade_espaco,
            'codigo_acao' => $this->codigo_acao
        );

        $this->db->insert('bonus', $data);
    }

    public function update()
    {
        $data = array();

        if ($this->codigo)
            $data['codigo'] = $this->codigo;
        if ($this->nome)
            $data['nome'] = $this->nome;
        if ($this->quantidade_espaco)
            $data['quantidade_espaco'] = $this->quantidade_espaco;
        if ($this->codigo_acao)
            $data['codigo_acao'] = $this->codigo_acao;

        $this->db->where('codigo', $this->codigo);
        $this->db->update('bonus', $data);
    }

    public function delete()
    {
        $where = array();
        
        if ($this->codigo)
            $where['codigo'] = $this->codigo;
        if ($this->nome)
            $where['nome'] = $this->nome;
        if ($this->quantidade_espaco)
            $where['quantidade_espaco'] = $this->quantidade_espaco;
        if ($this->codigo_acao)
            $where['codigo_acao'] = $this->codigo_acao;
        

        $this->db->delete('bonus', $where); 

    }
    
    public function like($parametro_especifico)
    {
        $parametro = $parametro_especifico;
        $this->db->like('nome', $parametro);
        $resultado = $this->db->get_where('bonus', array('grupo_codigo' => $this->codigo_acao ));
        
        return $resultado->result();
    }
    
}
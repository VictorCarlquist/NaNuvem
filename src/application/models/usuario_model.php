<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Usuario_model extends CI_Model {
    var $codigo = NULL;
    var $nome ='';
    var $email ='';
    var $senha ='';
    var $grupo_codigo ='';


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
        if ($this->nome)
            $where['nome'] = $this->nome;
        if ($this->email)
            $where['email'] = $this->email;
        if ($this->senha)
            $where['senha'] = $this->senha;
        if ($this->grupo_codigo)
            $where['grupo_codigo'] = $this->grupo_codigo;

        $query = $this->db->get_where('usuarios', $where);
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
        $query = $this->db->get('usuarios');
        return $query->result();    
    }


/* Retorna um unico objeto, com os dados de tabelas relacionadas, a partir dos atributos usados
 *  
 *
 * Exemplo de uso:
 *
 * 
 * 
*/
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

/*
 * Insere o usuario na base de dados
*/
    public function insert()
    {
        $data = array(
            'nome' => $this->nome,
            'email' => $this->email,
            'senha' => $this->senha,
            'grupo_codigo' => $this->grupo_codigo
        );

        $this->db->insert('usuarios', $data);
    }

    public function update()
    {
        $data = array();

        if ($this->nome)
            $data['nome'] = $this->nome;
        if ($this->email)
            $data['email'] = $this->email;
        if ($this->senha)
            $data['senha'] = $this->senha;
        if ($this->grupo_codigo)
            $data['grupo_codigo'] = $this->grupo_codigo;

        $this->db->where('codigo', $this->codigo);
        $this->db->update('usuarios', $data);
    }

    public function delete()
    {
        $where = array();
        
        if ($this->codigo)
            $where['codigo'] = $this->codigo;
        if ($this->nome)
            $where['nome'] = $this->nome;
        if ($this->email)
            $where['email'] = $this->email;
        if ($this->senha)
            $where['senha'] = $this->senha;
        if ($this->grupo_codigo)
            $where['grupo_codigo'] = $this->grupo_codigo;

        $this->db->delete('usuarios', $where); 

    }
    
    public function like($parametro_especifico)
    {
        $parametro = $parametro_especifico;
        $this->db->like('nome', $parametro);
        $this->db->or_like('email', $parametro);
        $resultado = $this->db->get_where('usuarios', array('grupo_codigo' => $this->grupo_codigo ));
        
        return $resultado->result();
    }
    
}
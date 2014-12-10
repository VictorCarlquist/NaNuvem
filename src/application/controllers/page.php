<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
	Criar os controladores herdando de MY_Controller
	para utilizar o sitema de login.
	Para ecessar o usuario atual use $this->usuario
**/

class Page extends MY_Controller{
	
	public function __construct()
   	{
        parent::__construct(TRUE);
   	}

	public function index()
	{
		$this->Login();

		//Descomentar abaixo para exibir o usuario na sessão
		//if(isset($this->usuario)){ echo "Usuario :<pre>"; print_r($this->usuario); echo "</pre>"; }
	}

	public function Login()
	{
		$this->load->helper("form");
		$this->load->library("form_validation");

		$this->form_validation->set_rules('email', 'E-mail', 'required|valid_email');
		$this->form_validation->set_rules('password', 'Senha', 'required|callback_checar_login['.$this->input->post("email").']');

		if ($this->form_validation->run() == FALSE) {
			
			$data = array('titulo' => 'Home');

			//Caso um usuário ja tenha efetuado login
			if(isset($this->usuario)){
				$data['usuario_logado'] =  $this->usuario;	
			}

			$this->load->view('layout/header', $data);
			$this->load->view('page/cabecario');
			$this->load->view('page/home');
			$this->load->view('layout/rodape');
			$this->load->view('layout/footer');
		} else {

			$this->load->model("usuario_model", "Usuario");
			$this->Usuario->senha = $this->input->post("senha");
			$this->Usuario->email = $this->input->post("email");

				
			$newdata = array(
	           'usuario' => $this->Usuario->get(),
	           'logged_in' => TRUE
	       	);

			$this->load->library('session');
			$this->session->set_userdata($newdata);

			redirect('principal_usuario');
		}
	}

	//Verifica os dados para efetuar o login
	public function checar_login($senha, $email)
	{
		$this->load->model("usuario_model", "Usuario");
		$this->Usuario->senha = $senha;
		$this->Usuario->email = $email;

		$usuario = $this->Usuario->get();

		if($usuario != null && $usuario->email == $email && $usuario->senha == $senha){
			return TRUE;
		} else {
			$this->form_validation->set_message('checar_login', 'O usuário não foi encontrado');
			return FALSE;
		}
	}

	//Basta criar um link com: href="<?php echo site_url('page/sair') ? >" para sair 
	public function Sair()
	{
		$this->load->library('session');
		$this->session->sess_destroy();
		redirect(site_url());
	}

}

/* End of file page.php */
/* Location: ./application/controllers/page.php */
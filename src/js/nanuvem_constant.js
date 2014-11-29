(function (NANUVEM){ // "namespace"

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre a versão do arquivo
*/
NANUVEM.URL_VERSION = "index.php/XXXXXXX";

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre as informações do arquivo
*/
NANUVEM.URL_INFO = "ajax_file_info.txt";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para mover o arquivo
*/
NANUVEM.URL_MOVE = "index.php/XXXXXXX";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para deletar o arquivo
*/
NANUVEM.URL_DELETE_FILE = "http://localhost/nanuvem/index.php/directory_manager/delete_file";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para renomear o arquivo
*/
NANUVEM.URL_RENAME = "index.php/XXXXXXX";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para adicionar um comentario na versao
*/
NANUVEM.URL_VERSION_ADDCOMMENT = "index.php/XXXXXXX";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para receber todos os dados de uma versao
*/
NANUVEM.URL_VERSION_CONSTRUCTOR = "index.php/XXXXXXX";

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre a versão do arquivo
*/
NANUVEM.URL_LOAD_DIR = "http://localhost/nanuvem/index.php/directory_manager/get_directories";

NANUVEM.URL_LOAD_FILES = "http://localhost/nanuvem/index.php/directory_manager/get_files";

NANUVEM.TYPE_DIRECTORY = 0;
NANUVEM.TYPE_FILE = 1;

})(NANUVEM);
(function (NANUVEM){ // "namespace"

NANUVEM.BASE_URL = "http://localhost/nanuvem/index.php";

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre a versão do arquivo
*/
NANUVEM.URL_VERSIONS = NANUVEM.BASE_URL + "/directory_manager/get_versions";

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre a versão do arquivo
*/
NANUVEM.URL_VERSION_COMMENTS = NANUVEM.BASE_URL + "/directory_manager/get_comments";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para mover o arquivo
*/
NANUVEM.URL_MOVE_FILE = NANUVEM.BASE_URL + "/directory_manager/move_file";

/**
* @constant 
* @description Armazena a url para enviar e receber dados para deletar o arquivo
*/
NANUVEM.URL_DELETE_FILE = NANUVEM.BASE_URL + "/directory_manager/delete_file";

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
* @description Armazena a url para enviar e receber dados todos os diretórios
*/
NANUVEM.URL_LOAD_DIR = NANUVEM.BASE_URL + "/directory_manager/get_directories";

/**
* @constant 
* @description Armazena a url para enviar e receber dados sobre os arquivos em um diretório
*/
NANUVEM.URL_LOAD_FILES = NANUVEM.BASE_URL + "/directory_manager/get_files";

NANUVEM.TYPE_DIRECTORY = 0;
NANUVEM.TYPE_FILE = 1;
NANUVEM.TYPE_VERSIONS = 2;
NANUVEM.TYPE_VERSIONS_COMMENTS = 3;

})(NANUVEM);
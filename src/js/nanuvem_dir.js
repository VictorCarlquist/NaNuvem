if (typeof(NANUVEM) == "undefined") {
    NANUVEM = {};
}
(function (NANUVEM){ // "namespace"

/**
* @class Representa o sistema de gerenciamento de arquivos e diretório
* @param {object} Função que será chamada quando o objeto for preenchido
* @param {int} id_dir Id do diretório
*/
NANUVEM.DirectoryManager = function (fun, id_dir) 
{
    // |info (object)| será um objeto gerado via JSON, ele armazenará todas as 
    // informações relacionadas com o arquivo
    // Provavelmente ele possuirá os seguintes atributos:
    //	- name string
    //	- owner id_usuario
    //	- size int (em bytes?)
    //	- absolutePath string (/dir1/dir2)
    //	- permission int (talvez?)
    this.currentPath = "/";
    this.files = [];
    this.dirs = [];
    this.selected = false;
    // private
    this.callback = fun;
    this.id = id_dir;
    this._init(id_dir);
}

NANUVEM.DirectoryManager.prototype._init = function (id_dir)
{
    this.getDirAndFiles(id_dir);
}

/**
* Solicita os arquivos e os diretorios que estão dentro do id_dir
* @param {int} id_dir Caminho que o ajax deve buscar os arquivos e diretórios
*/
NANUVEM.DirectoryManager.prototype.changeDirectory = function (id_dir)
{
    this.getDirAndFiles(id_dir);
}

/**
* Pega os diretorio e os arquivos dentro do diretorio especificado pelo id_dir
* @param {int} id_dir Caminho que o ajax deve buscar os arquivos e diretórios
* @private
*/
NANUVEM.DirectoryManager.prototype.getDirAndFiles = function (id_dir)
{
    if (id_dir == null)
        id_dir = 0;
    var values = {id_dir: id_dir};
    var mf = this;
    NANUVEM.sendData(NANUVEM.URL_LOAD_DIR, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            mf.files = data.files;
            mf.currentPath = data.currentPath;
            mf.dirs = data.dirs;
            if (mf.callback)
                mf.callback(data);
        }
    );
}

})(NANUVEM);

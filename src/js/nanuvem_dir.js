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
    this.getDirs(id_dir);
}

/**
* Solicita os arquivos e os diretorios que estão dentro do id_dir
* @param {int} id_dir Caminho que o ajax deve buscar os arquivos e diretórios
*/
NANUVEM.DirectoryManager.prototype.changeDirectory = function (id_dir)
{
    this.getFiles(id_dir);
    //this.callback();
}

/**
* Pega os diretorios
* @private
*/
NANUVEM.DirectoryManager.prototype.getDirs = function ()
{
    var values = {};
    var mf = this;

    NANUVEM.sendData(NANUVEM.URL_LOAD_DIR, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            for (var i = 0; i < data.dirs.length; i++) {
                data.dirs[i].dirs = [];
                for (var j = 0; j < data.dirs.length; j++) {
                    if (data.dirs[i].dir == data.dirs[j].fatherDir) {
                        data.dirs[i].dirs.push(data.dirs[j]);
                    }
                }
            }
            mf.dirs = data.dirs; 
            //mf.dirs.splice(1);
            if (mf.callback)
                mf.callback(data, NANUVEM.TYPE_DIRECTORY);
        }
    );
}

/**
* Solicita os arquivos que estão dentro de um diretório
* @param {int} id_dir ID do diretório que deve ser carregado os arquivos
*/
NANUVEM.DirectoryManager.prototype.getFiles = function (id_dir)
{
    var values = {'id':id_dir};
    var mf = this;

    NANUVEM.sendData(NANUVEM.URL_LOAD_FILES, values, 
        // função que será chamada ao receber os dados.
        function (data) {

            for (var i = 0; i < mf.dirs.length; i++) {
                if (mf.dirs[i].dir == id_dir) {
                    mf.dirs[i].files = data.files;
                    break;
                }
            }
            if (mf.callback)
                mf.callback(data, NANUVEM.TYPE_FILE);
        }
    );
}

/**
* Deleta o arquivos especificado
* @param {int} id_file ID do arquivo  que será deletado
* @param {int} id_dir ID do diretório que o arquivo que será deletado está
*/
NANUVEM.DirectoryManager.prototype.deleteFile = function (id_file, id_dir)
{
    var values = {'id':id_file};
    var mf = this;

    NANUVEM.sendData(NANUVEM.URL_DELETE_FILE, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            mf.getFiles(id_dir);
        }
    );
}

NANUVEM.DirectoryManager.prototype.getVersions = function (id_file, id_dir)
{
    var values = {'id':id_file};
    var mf = this;

    NANUVEM.sendData(NANUVEM.URL_VERSIONS, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            var dir;
            var file;
            for (var i = 0; i < mf.dirs.length; i++) {
                if (mf.dirs[i].dir == id_dir) {
                    dir = mf.dirs[i];
                    break;
                }
            }
            for (var i = 0; i < dir.files.length; i++) {
                if (dir.files[i].codigo == id_file) {
                    dir.files[i].versions = data.versions;
                    file = dir.files[i];
                    break;
                }
            }
            if (mf.callback)
                mf.callback(data, NANUVEM.TYPE_FILE, file);
        }
    );
}


NANUVEM.DirectoryManager.prototype.moveFile = function (id_file, id_dir_to)
{
    var values = {'id':id_file, 'to':id_dir_to};
    var mf = this;

    NANUVEM.sendData(NANUVEM.URL_MOVE_FILE, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            mf.getFiles(id_dir_to);
        }
    );
}

})(NANUVEM);

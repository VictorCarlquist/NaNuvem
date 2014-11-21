if (typeof(NANUVEM) == "undefined") {
    NANUVEM = {};
}
(function (NANUVEM){ // "namespace"

/**
* @class Representa um arquivo com suas informações.
* @param {int} id_file Identificador do arquivo
*/
NANUVEM.File = function (id) 
{
    //
    // |info (object)| será um objeto gerado via JSON, ele armazenará todas as 
    // informações relacionadas com o arquivo
    // Provavelmente ele possuirá os seguintes atributos:
    //	- name string
    //	- owner id_usuario
    //	- size int (em bytes?)
    //	- absolutePath string (/dir1/dir2)
    //	- permission int (talvez?)
    this.id = id;
    this.info = null;
    this.versions = [];
}

/**
* Pega as versões de um arquivo
*/
NANUVEM.File.prototype.getVersions = function ()
{
    var values = {id: this.id};
    var file = this;
    this.sendData(NANUVEM.URL_VERSION, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            file.versions = data;
        }
    );
}

/**
* Pega as informações do arquivo
*/
NANUVEM.File.prototype.getInfo = function()
{
    var values = {id: this.id};
    var file = this;
    NANUVEM.sendData(NANUVEM.URL_INFO, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            file.info = data;
        }
    );    
}

/**
* Move o arquivo
* @param {string} s Caminho atual do arquivo
* @param {string} d Destino do arquivo
*/
NANUVEM.File.prototype.move = function(s, d)
{
    var values = {id: this.id, source: s, destination: d};
    var file = this;
    NANUVEM.sendData(NANUVEM.URL_MOVE, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            //success
        }
    );    
}

/**
* Apaga o arquivo
*/
NANUVEM.File.prototype.delete = function()
{
    var values = {id: this.id}
    var file = this;
    NANUVEM.sendData(NANUVEM.URL_DELETE, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            //success
        }
    );    
}

/**
* Renomeia o arquivo
* @param {string} newName Novo nome do arquivo
*/
NANUVEM.File.prototype.rename = function(newName)
{
    var values = {id: this.id, newName: newName}
    var file = this;
    NANUVEM.sendData(NANUVEM.URL_RENAME, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            //success
        }
    );    
}

})(NANUVEM);

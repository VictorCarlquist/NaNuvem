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
* É responsável por enviar os dados ao servidor.
* @param {string} url Página do servidor que deve receber os dados
* @param {AINDA NAO DEFINIDO (ARRAY/JSON ou INT)} values Contém os dados que serão enviados ao servidor
* @param {function} funSuccess Função que será chamada ao receber os dados.  
* Esta função deve possuir um parametro (data) para receber os dados.
* @returns {JSON} Retorna um objeto com JSON com os dados recebidos, 
* a estrutura deste objeto pode variar de acordo com os valores e url enviados 
* ao servidor.  
*/
NANUVEM.File.prototype.sendData = function(url, values, funSuccess)
{
    $.ajax({
        url : url,
        dataType : "json",
        type: "post",
        data: values,
        success : funSuccess,
        error: function() {
            console.log("error on sendData: "+ NANUVEM.getFuntionName(NANUVEM.File.sendData.callee));
        }
    });
}

/**
* Pega as versões de um arquivo
*/
NANUVEM.File.prototype.getVersions = function ()
{
    var values = this.id;
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
NANUVEM.File.prototype.getInfo = function(id_file)
{
    var values = this.id;
    var file = this;
    this.sendData(NANUVEM.URL_INFO, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            file.info = data;
        }
    );    
}

})(NANUVEM);

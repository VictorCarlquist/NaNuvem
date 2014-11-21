(function (NANUVEM){ // "namespace"

/**
* @class Representa uma versão do arquivo 
*/

NANUVEM.Version = function (id_user, id_version) 
{
    this.id_user = id_user;
    this.id_version = id_version;
    this.status = 1; // 1 = OK
    this.date = "";
    this.size = 0;
    this.comments = []; // Deve possuir o comentário e o usuário que fez o comentário
    this._init();
}

/**
* Construtor 
*/
NANUVEM.Version.prototype._initial = function (id_user, id_version) {
    var values = {id_user: this.id_user, id_version: this.id_version};
    var obj = this;
    this.sendData(NANUVEM.URL_VERSION_CONSTRUCTOR, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            var data = data;
            obj.status = data.status;
            obj.date = data.date;
            obj.size = data.size;
            obj.comments = data.comments;
        }
    );
}

/**
* Adiciona um comentário em uma versão
*/
NANUVEM.Version.prototype.addComment = function(text) {
    var values = {id_user: this.id_user, id_version: this.id_version, text: text};
    var version = this;
    this.sendData(NANUVEM.URL_VERSION_ADDCOMMENT, values, 
        // função que será chamada ao receber os dados.
        function (data) {
            comments.push(data);
        }
    );
}

})(NANUVEM);

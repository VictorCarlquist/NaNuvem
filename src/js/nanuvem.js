if (typeof(NANUVEM) == "undefined") {
    NANUVEM = {};
}
(function (NANUVEM){ // "namespace"

// Herança
// *Importante*: Usar call(this) no construtor
/**
    inherit(pai, filho);
    filho = function(){
        pai.call(this);	
    }
*/	
NANUVEM.inherit=function(obj1,obj2){
    obj2.prototype.baseclass = obj1;
    for (var proto in obj1.prototype) { 
        if (!obj2.prototype[proto]) 
            obj2.prototype[proto] = obj1.prototype[proto];
        else 
            obj2.prototype.baseclass[proto] = obj1.prototype[proto];
    }
}

/**
    File
    Representa um arquivo no App.	
*/
NANUVEM.File = function (id_file) 
{
    // info @object
    // |info| será um objeto gerado via JSON, ele armazenará todas as 
    // informações relacionadas com o arquivo
    // Provavelmente ele possuirá os seguintes atributos:
    //	- name @string
    //	- owner @id_usuario
    //	- size @int (em bytes?)
    //	- absolutePath @string (/dir1/dir2)
    //	- permission @int (talvez?)
    this.info = null;
    this.versions = [];
}
NANUVEM.File.prototype.getVersions = function (id_file)
{
    var value = 1;
    $.ajax({
        url : "test.txt",
        dataType : "json",
        type: "post",
        data: value,
        success : function(data) {
        versions = data;
            alert(versions.firstName);
        },
        error: function() {
            console.log("Erro: getVersions");
        }
    });
}

NANUVEM.File.prototype.getInfo = function(id_file)
{
    var value = 1;
    $.ajax({
        url : "test.txt",
        dataType : "json",
        type: "post",
        data: value,
        success : function(data) {
            info = data;
        },
        error: function() {
            console.log("Erro: getVersions");
        }
    });	
}

})(NANUVEM);

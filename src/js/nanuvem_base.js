if (typeof(NANUVEM) == "undefined") {
    NANUVEM = {};
}
(function (NANUVEM){ // "namespace"

// Herança
// *Importante*: Usar call(this) no construtor
/*
*    inherit(pai, filho);
*    filho = function(){
*       pai.call(this); 
*    }
*/
/**
* Realiza a herança entre duas classes, obj2 herda de obj1.
* @param {object} obj1 Classe pai
* @param {object} obj2 Classe filho
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
* É responsável por enviar os dados ao servidor.
* @param {string} url Página do servidor que deve receber os dados
* @param {AINDA NAO DEFINIDO (ARRAY/JSON ou INT)} values Contém os dados que serão enviados ao servidor
* @param {function} funSuccess Função que será chamada ao receber os dados.  
* Esta função deve possuir um parametro (data) para receber os dados.
* @returns {JSON} Retorna um objeto com JSON com os dados recebidos, 
* a estrutura deste objeto pode variar de acordo com os valores e url enviados 
* ao servidor.  
*/
NANUVEM.sendData = function(url, values, funSuccess)
{
    $.ajax({
        url : url,
        dataType : "json",
        type: "post",
        data: values,
        success : funSuccess,
        error: function(a, b, c) {
            console.log(b +" SendData: " + " " + a +" "+ c);
        }
    });
}

/**
* Retorna o nome da função.
* @returns {string} Nome da função
* @param {object} Deve ser uma function. 
*/
NANUVEM.getFunctionName = function (fun) 
{ 
    return fun.toString().split(" ", 2).join(" ");
}

})(NANUVEM);
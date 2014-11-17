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
* Retorna o nome da função.
* @returns {string} Nome da função
* @param {object} Deve ser uma function. 
*/
NANUVEM.prototype.getFunctionName = function (fun) 
{ 
    return fun.toString().split(" ", 2).join(" "));
}

})(NANUVEM);
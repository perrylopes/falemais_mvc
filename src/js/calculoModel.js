'use strict'
var dadosForm = function(){
   var form = document.querySelector('.form');
   return {
       rota: parseFloat(form.rota.value),
       minuto: parseInt(form.minuto.value),
       plano: parseInt(form.plano.value),
       form: form
    };

}

module.exports = {dadosForm};
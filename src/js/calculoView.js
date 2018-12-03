'use strict'
const montar = function(dados){
   let tr = document.createElement('tr');
   td(tr, dados.origem);
   td(tr, dados.destino);
   td(tr, dados.minuto);
   td(tr, dados.plano);
   td(tr, dados.com);
   td(tr, dados.sem);
   return tr;
}

function td(tr, dado){
   let td = document.createElement('td');
   td.classList.add('table-calculo');
   td.textContent = dado;
   tr.appendChild(td);
}

module.exports = {montar}
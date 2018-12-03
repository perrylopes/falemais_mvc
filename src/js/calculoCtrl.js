const calculoView = require("./calculoView");
const calculoModel = require("./calculoModel");

document.querySelector('.form__buttom').addEventListener('click',()=>{
    let dados = calculoModel.dadosForm();
    dados.form.reset();
    let form_calc = document.querySelector('.form_calc');
    let dados1 = calc(dados);
    let tr = calculoView.montar(dados1);
    form_calc.appendChild(tr);
    
})

function calc(dados){
    switch(dados.rota){
        case 1:
           return dadosCalc(dados, 1.90, '011', '016')
        case 2:
           return dadosCalc(dados, 2.90, '016', '011') 
        case 3:
           return dadosCalc(dados, 1.70, '011', '017')
        case 4:
           return dadosCalc(dados, 2.70, '017', '011')
        case 5:
           return dadosCalc(dados, 0.90, '011', '018')
        case 6:
           return dadosCalc(dados, 1.90, '018', '011')
             
    }
}

function dadosCalc(dados, valor , origem, destino){
        return dados = {
            origem: origem,
            destino: destino,
            minuto: dados.minuto,
            plano: "Fale Mais " + dados.plano,
            com: "R$" + com(dados.minuto,valor, dados.plano),
            sem: "R$" + dados.minuto*valor
        }
}

function com(minuto,valor,plano){
        if(minuto <= plano){
            return 0;
        }else{
            let porcentagem = (minuto*valor)*0.1; 
            return ((minuto - plano)*valor)+porcentagem;
        }
}
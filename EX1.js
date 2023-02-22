/* Faça um programa que peça uma nota, entre zero e dez. 
 Mostre uma mensagem caso o valor seja inválido e continue pedindo até
 o usuário informe um valor válido */ 
const prompt = require("prompt-sync")();

let resposta = false;

do{    
    console.log('Qual nota de 0 a 10 você decide nos dar?');
    let nota = prompt();
        if(nota >= 0 && nota <= 10){
            console.log(`Agradecemos sua nota ${nota}`);
            resposta = true;
        }else{
            console.log('Valor invalido, é necessário que seja entre 0 e 10.');
        }

}while (resposta === false) 


// ************** completo ***********

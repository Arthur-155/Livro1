//elaborar um programa que leia um número - que deve ser uma centena.Calcule e exiba a centena invertida
//Caso o número não seja uma centena, exiba mensagem.

const prompt = require ("prompt-sync")();
const numeroInserido = Number(prompt("Insira um número: "));
if(numeroInserido <100 || numeroInserido >=1000){
    console.log("O número inserido não é uma centena");
}else{
    const numeroEmString = String(numeroInserido)
    for(let i=numeroEmString.length -1; i>=0 ;i--){
        process.stdout.write(numeroEmString[i]);
    }
}
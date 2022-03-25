/*Faça a média de cinco notas, após isso, se a nota 
for maior que média(6) passe uma mensagem de aprovado, caso a nota for menor que
a média(6) passe uma mensagem de reprovado. */

var nota1 = 6
var nota2 = 6
var nota3 = 6
var nota4 = 6
var nota5 = 6

var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if(media >= 6){
    console.log("Voce passou! sua nota: " + media)
}
else{
    console.log("Voce nao passou. sua nota foi: " + media)
}

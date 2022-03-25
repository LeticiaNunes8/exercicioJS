/*Faça a média de três notas, após isso, se a nota 
for maior que média(6) passe uma mensagem de aprovado, caso a nota for menor que
a média(6) passe uma mensagem de reprovado. */

function notaaluno(){

    var nota1 = 7
    var nota2 = 1
    var nota3 = 10
    var media = (nota1 + nota2 + nota3) / 3

    console.log(media)

    if(media > 6){
        return "aluno aprovado"
    }
    else{
        return "aluno reprovado"
    }

}
console.log(notaaluno())





// 6. Escreva um programa que solicite ao usuário números inteiros positivos até que ele digite um número negativo. O programa deve somar todos os números positivos e, ao final, exibir a soma.

let num = Number(prompt('Informe números inteiros e positivos. Caso deseje sair digite um número negativo: '))
console.log (num)
let soma = 0

while (num >= 0) {    
    soma = soma + num
    console.log (num)
    num = Number(prompt('Informe números inteiros e positivos. Caso deseje sair digite um número negativo: '))
}

console.log (`Valor total: ${soma}`)
alert (`Valor total: ${soma}`)
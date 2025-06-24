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

// Exercícios


// 7. Escreva um programa que simula um sistema de login. O usuário tem até 3 tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.

// 8. Escreva um programa que calcula a média de uma série de números positivos, parando quando o número zero for encontrado. Exiba a média no final.

// 9. Implementar um programa que some todos os números informados pelo usuário até que seja digitada a palavra “Fim”.

// 10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair). Use switch para tratar cada opção. O programa só termina quando o usuário escolher a opção "Sair".

// 11. Implementar um programa que simule um sistema de caixa de supermercado. O programa deve solicitar a quantidade e o valor unitário de cada produto. Esse processo deve ser repetido até que o usuário informe a palavra “fim”. Após a entrada da palavra “fim”, o programa deve exibir o valor total da compra.

// 12. Implemente um programa de calculadora simples que, dentro de um laço while, peça ao usuário para escolher uma operação ( + , - , * , / ) usando switch , leia dois números e mostre o resultado. O programa deve continuar até que o usuário escolha sair.
// 1. Escreva um programa que leia um número de 1 a 7 e exiba o dia da semana correspondente usando switch . Se o número não estiver entre 1 e 7, exiba "Dia inválido".

let dia = Number(prompt('Digite o dia da semana (1-7):'))

switch (dia) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('Dia Inválido')
}
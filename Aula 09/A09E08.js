// 8. Escreva um programa que calcula a média de uma série de números positivos, parando quando o número zero for encontrado. Exiba a média no final.

let media = 0
let soma = 0
let i = 0
let numero

while (numero !== 0) {
    numero = Number(prompt('Informe os números e caso deseja parar e ver a média, digite "0": '))
    if (numero > 0) {
        i++
        soma = soma + numero
        console.log(i, soma)
    } else if (numero < 0) {
        alert ('Número inválido. Informe um número positivo: ')
        soma = soma
        i = i
    }    
}

media = soma / i

alert (`A média dos números informados é  igual à ${media.toFixed(2)}`)
console.log (`${soma} / ${i} = ${media}`)
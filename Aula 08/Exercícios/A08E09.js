// 9. Escreva um programa que leia uma "sequência" de números (quantidade definida pelo usuário) e exiba quantos números são "positivos", "negativos" e "zeros".

let qtde = Number(prompt('Informe a quantidade de números:'))
let positivos = 0
let negativos = 0
let zeros = 0
let nro

for (let i = 1; i <= qtde; i++) {
    nro = Number(prompt(`Informe o ${i}º número`))
    if (nro === 0) {
        zeros = zeros + 1
    } else if (nro < 0) {
        negativos = negativos + 1
    } else {
        positivos = positivos + 1
    }
}

console.log(`Quantidade de números positivos: ${positivos}`)
console.log(`Quantidade de números negativos: ${negativos}`)
console.log(`Quantidade de números Zero: ${zeros}`)
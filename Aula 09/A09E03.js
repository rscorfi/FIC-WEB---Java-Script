// 3. Escreva um programa que calcula a soma dos números de 1 a 50 usando while .

let i = 1
let soma = 0

while (i <= 50) {
    console.log(i, soma)
    soma = soma + i
    i++
}
console.log(`Soma dos números de 1 à ${i-1}: ${soma}`)
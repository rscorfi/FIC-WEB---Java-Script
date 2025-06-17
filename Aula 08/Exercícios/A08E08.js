// 8. Implementar um programa que calcule a "potência" de um número utilizando uma estrutura de repetição. O programa deve solicitar ao usuário que informe a "base" e o "expoente", ambos considerados como inteiros.

let base = Number(prompt('Informe o número de base:'))
let exp = Number(prompt('Informe o expoente:'))
let potencia = 1

for (let i = 1; i <= exp; i++) {
    potencia = potencia * base
}

console.log(`${base} ^ ${exp} = ${potencia}`)
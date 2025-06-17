// 7. Implementar um programa que, dado um número inteiro informado pelo usuário, calcule o "fatorial" desse número. O fatorial de um número (n!) é o produto de todos os inteiros positivos menores ou iguais a ele. Por exemplo, 4! = 4×3×2×1. Por definição, 0! = 1.

let n = Number(prompt('Informe o número:'))
let fatorial = 1

for (let i = 1; i <= n; i++) {
    fatorial = fatorial * i
}

console.log(fatorial)
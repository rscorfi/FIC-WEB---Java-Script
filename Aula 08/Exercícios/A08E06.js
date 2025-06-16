// 6. Implementar um programa que, dado um número inteiro "n" informado pelo usuário, calcule a "média" dos "n" primeiros números naturais. Considere que os números naturais começam em 0.

let qtdeNros = Number(prompt('Informe a quantidade de números:'))
let menorNro = 10000000000000000000000000000000000000000000000000000000

for (let i = 1; i <= qtdeNros; i++) {
    let nro = Number(prompt(`Informe o ${i}º número:`))
    if (nro < menorNro) {
        menorNro = nro        
    }
}

console.log(menorNro)



// 7. Implementar um programa que, dado um número inteiro informado pelo usuário, calcule o "fatorial" desse número. O fatorial de um número (n!) é o produto de todos os inteiros positivos menores ou iguais a ele. Por exemplo, 4! = 4×3×2×1. Por definição, 0! = 1.

// 8. Implementar um programa que calcule a "potência" de um número utilizando uma estrutura de repetição. O programa deve solicitar ao usuário que informe a "base" e o "expoente", ambos considerados como inteiros.

// 9. Escreva um programa que leia uma "sequência" de números (quantidade definida pelo usuário) e exiba quantos números são "positivos", "negativos" e "zeros".

// 10. Crie um programa que gere a sequência de "Fibonacci" até o n-ésimo termo, onde n é informado pelo usuário. É uma sequência de números inteiros, começando por 0 e 1. Os números subsequentes corresponde a soma dos dois números anteriores. Ex: 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
// 10. Crie um programa que gere a sequência de "Fibonacci" até o n-ésimo termo, onde n é informado pelo usuário. É uma sequência de números inteiros, começando por 0 e 1. Os números subsequentes corresponde a soma dos dois números anteriores. Ex: 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

let n = Number(prompt('Informe a quantidade de termos de Fibonacci:'))
let n1 = 0
let n2 = 1
let n3 = 0

for (let i = 0; i < n; i++) {
    console.log(n1)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
}
// 5. Implementar um programa que encontre o "menor" valor de uma sequência de números informados pelo usuário. O programa deve solicitar, inicialmente, a "quantidade" de números a serem fornecidos. Em seguida, o usuário deve informar os números um a um (utilize prompt ). O programa deve encontrar e exibir o menor valor da sequência.

let qtdeNros = Number(prompt('Informe a quantidade de números:'))
let menorNro = Number(prompt(`Informe o 1º número:`))

for (let i = 2; i <= qtdeNros; i++) {
    let nro = Number(prompt(`Informe o ${i}º número:`))
    if (nro < menorNro) {
        menorNro = nro        
    }
}

console.log(menorNro)
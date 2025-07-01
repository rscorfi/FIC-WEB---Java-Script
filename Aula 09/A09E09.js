// 9. Implementar um programa que some todos os números informados pelo usuário até que seja digitada a palavra “Fim”.

let soma = 0
let i = 0
let numero

while (numero !== 'Fim') {
    numero = prompt('Informe os números e para ver a soma, digite "Fim": ')
    if (numero !== 'fim') {
        i++
        soma = soma + Number(numero)
        console.log(i, Number(numero), soma)    
    }    
}

alert (`A média dos números informados é  igual à ${soma}`)
console.log (soma)
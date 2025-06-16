// 4. Implementar um programa que imprima a "tabuada" de um "número" informado pelo usuário (utilize prompt ). O programa deve exibir os resultados das multiplicações desse número por valores de 0 até 10.

let nro = Number(prompt('Informe o número'))
let produto = 0

for (let i = 0; i <= 10; i++) {
    produto = nro * i
    console.log(`${nro} * ${i} = ${produto}`)
    produto = 0    
}
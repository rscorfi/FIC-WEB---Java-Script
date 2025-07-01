// 11. Implementar um programa que simule um sistema de caixa de supermercado. O programa deve solicitar a quantidade e o valor unitário de cada produto. Esse processo deve ser repetido até que o usuário informe a palavra “fim”. Após a entrada da palavra “fim”, o programa deve exibir o valor total da compra.

let qtdeItem = 0
let valorItem = 0
let totalItem = 0
let valorTotal = 0

while (qtdeItem !== 'fim') {
    qtdeItem = prompt('Informe a quantidade. Para finalizar digite "fim"')
    switch (qtdeItem) {
        case 'fim':
            console.log (`Valor total à pagar: ${valorTotal}`)
            alert (`Valor total à pagar: ${valorTotal}`)
            break
        default:
            valorItem = Number(prompt('Informe o valor'))
            totalItem = Number(qtdeItem) * valorItem
            console.log (`${qtdeItem} * ${valorItem} = ${totalItem}`)
            valorTotal = valorTotal + totalItem
            
    }
}
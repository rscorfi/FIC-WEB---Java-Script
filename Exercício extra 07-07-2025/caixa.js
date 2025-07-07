// Sistema de Caixa de Loja

// Implementar um sistema simples de vendas que processa múltiplas compras e gera relatório do dia.

// Funcionalidades:

// 1. Menu Principal (usando switch e while) 
//     -Realizar venda
//     -Ver relatório do dia
//     -Sair

// 2. Sistema de Vendas
//     -Menu com 3 produtos com preços fixos (ex: Coca-Cola R$5.50, Chocolate R$3.00, etc.) e opção para finalizar a venda.
//     -Calcular total da compra
//     -Calcular total das vendas do dia
//     -Contar o total de cada produto vendido no dia
//     -Contar número total de vendas finalizadas

// 3. Relatório do Dia
//     -Total vendido
//     -Número de vendas realizadas
//     -Produto mais vendido

// Entregar o arquivo Javascript como anexo na atividade.

let opcaoMenuPrincipal = 0
let produtos = 0
let totalCompra = 0
let qtdeTotalVendasDia = 0
let totalProduto1 = 0 // Ex: X-Burguer
let totalProduto2 = 0 // Ex: X-Bacon
let totalProduto3 = 0 // Ex: Coca-Cola
let valorTotalVendasDia = 0
let produtoMaisVendido = ''

while (opcaoMenuPrincipal !== 3) {
    console.clear() // Limpa o console para uma melhor visualização

    opcaoMenuPrincipal = Number(prompt('Menu Principal:\n1. Realizar Venda\n2. Ver Relatório do Dia\n3. Sair\nEscolha uma opção (1-3): '))

    switch (opcaoMenuPrincipal) {
        case 1: // Realizar venda
            console.log('Menu de Vendas:')
            console.log('1. X-Burguer - R$25.50')
            console.log('2. X-Bacon - R$30.00')
            console.log('3. Coca-Cola - R$5.50')
            while (true) {

                produtos = Number(prompt('Escolha um produto (1-4): '))

                if (produtos === 4) {
                    break // Finaliza a venda
                }

                switch (produtos) {
                    case 1:
                        totalCompra += 25.50
                        totalProduto1++
                        console.log('Você escolheu X-Burguer - R$25.50')
                        console.log(`Total da compra até agora: R$${totalCompra.toFixed(2)}`)
                        break
                    case 2:
                        totalCompra += 30.00
                        totalProduto2++
                        console.log('Você escolheu X-Bacon - R$30.00')
                        console.log(`Total da compra até agora: R$${totalCompra.toFixed(2)}`)
                        break
                    case 3:
                        totalCompra += 5.50
                        totalProduto3++
                        console.log('Você escolheu Coca-Cola - R$5.50')
                        console.log(`Total da compra até agora: R$${totalCompra.toFixed(2)}`)
                        break
                    default:
                        console.log('Produto inválido, tente novamente.')
                }
            }

            qtdeTotalVendasDia++
            valorTotalVendasDia += totalCompra

            console.log(`Total da compra: R$${totalCompra.toFixed(2)}`)
            totalCompra = 0 // Reseta o total da compra para a próxima venda
            break
        case 2: // Ver relatório do dia
            console.log('Relatório do Dia:')
            console.log(`Total vendido: R$${valorTotalVendasDia.toFixed(2)}`)
            console.log(`Número de vendas realizadas: ${qtdeTotalVendasDia}`)
            console.log(`X-Burguer: ${totalProduto1} unidades`)
            console.log(`X-Bacon: ${totalProduto2} unidades`)
            console.log(`Coca-Cola: ${totalProduto3} unidades`)

            // Determinar o produto mais vendido
            if (totalProduto1 > totalProduto2 && totalProduto1 > totalProduto3) {
                produtoMaisVendido = 'X-Burguer'
            } else if (totalProduto2 > totalProduto1 && totalProduto2 > totalProduto3) {
                produtoMaisVendido = 'X-Bacon'
            } else if (totalProduto3 > totalProduto1 && totalProduto3 > totalProduto2) {
                produtoMaisVendido = 'Coca-Cola'
            } else {
                produtoMaisVendido = 'Nenhum produto foi o mais vendido'
            }

            console.log(`Produto mais vendido: ${produtoMaisVendido}`)
            break

        case 3: // Sair
            console.log('Saindo do sistema de vendas. Obrigado!')
            break
        default:
            console.log('Opção inválida, por favor escolha uma opção válida.')
            break
    }
    prompt('Pressione Enter para continuar...') // Pausa para o usuário ver o resultado antes de limpar a tela
}   
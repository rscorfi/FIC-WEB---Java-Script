// 10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair). Use switch para tratar cada opção. O programa só termina quando o usuário escolher a opção "Sair".

let opcao

while (opcao !== 3) {
    opcao = Number(prompt ('Informe uma opção: \n1 - Olá \n2 - Tchau \n3 - Sair'))

    switch (opcao) {
        case 1:
            alert ('Olá');
            console.log ('Olá');
            break;
        case 2:
            alert ('Tchau');
            console.log ('Tchau');
            break;
        case 3:
            alert ('Sair');
            console.log ('Saindo....');
            break;
        default:
            alert ('Opção inválida');
            console.log ('Opção inválida');
            break;
    }
}
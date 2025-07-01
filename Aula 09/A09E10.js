// 10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair). Use switch para tratar cada opção. O programa só termina quando o usuário escolher a opção "Sair".

let opcao

while (opcao !== 3) {
    opcao = Number(prompt ('Informe uma opção: 1 - Olá, 2 - Tchau, 3 - Sair'))

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
            console.log ('Sair');
            break;
    }
}
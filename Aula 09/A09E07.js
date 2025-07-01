// 7. Escreva um programa que simula um sistema de login. O usuário tem até 3 tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.

let senhaCerta = 'NS'

let i = 0

let senha

while (i < 3) {
    senha = prompt ('Informe sua senha: ')
    if (senha === senhaCerta) {
        alert ('Acesso Liberado!')
        break
    } else {
        alert ('Senha inválida!')
    }
    i++        
}

if (i >= 3) {
    alert ('Senha bloqueada')
}
// 12. Implemente um programa de calculadora simples que, dentro de um laço while, peça ao usuário para escolher uma operação ( + , - , * , / ) usando switch , leia dois números e mostre o resultado. O programa deve continuar até que o usuário escolha sair.

let numeroA = 0
let numeroB = 0
let operador
let resultado = 0

while (numeroA !== 'sair') {
    numeroA = prompt('Informe o primeiro número ou digite "sair" para finalizar')
    switch (numeroA) {
        case 'sair':
            break
        default:
        operador = prompt('Informe a operação ( +, - , * , / ): ') 
        switch (operador) {
            case '+':    
                numeroB = Number(prompt('Informe o segundo valor'))
                resultado = Number(numeroA) + numeroB
                console.log (`${numeroA} + ${numeroB} = ${resultado}`)                
                break

            case '-':    
                numeroB = Number(prompt('Informe o segundo valor'))
                resultado = Number(numeroA) - numeroB
                console.log (`${numeroA} - ${numeroB} = ${resultado}`)                
                break

            case '*':    
                numeroB = Number(prompt('Informe o segundo valor'))
                resultado = Number(numeroA) * numeroB
                console.log (`${numeroA} x ${numeroB} = ${resultado}`)                
                break

            case '/':    
                numeroB = Number(prompt('Informe o segundo valor'))
                resultado = Number(numeroA) / numeroB
                console.log (`${numeroA} ÷ ${numeroB} = ${resultado}`)                
                break

        }
            
    }
}
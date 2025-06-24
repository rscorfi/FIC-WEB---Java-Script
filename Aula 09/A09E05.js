// 5. Escreva um programa que solicita ao usuário adivinhar um número secreto entre 1 e 10. O programa continua pedindo palpites até que o número correto seja adivinhado. Use o while para manter o laço até o palpite estar correto. Ao final, apresente o número de palpites, e parabenise o jogador.

let num_secreto = Math.floor(Math.random() * 10) + 1

// váriável de verificação
// console.log(num_secreto)  

let num = Number(prompt("Adivinhe o número de 1 a 10"))
let palpites = 0

while (num != num_secreto) {
    num = Number(prompt('Tente novamente:'))    
    palpites++
}

alert(`Parabens! Você tentou ${palpites} vezes até acertar e número secreto era ${num_secreto}`)
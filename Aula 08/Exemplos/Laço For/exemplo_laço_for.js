soma = 0
for (let i = 1; i <= 5; i++) {
    soma = soma + i
    console.log(`Interação A ${i} = ${soma}`)
}

soma = 0
for (let i = 1; soma <= 5; i++) {
    soma = soma + i
    console.log(`Interação B ${i} = ${soma}`)
}

contador = 0
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        contador++
        console.log(contador, i)
    }

}
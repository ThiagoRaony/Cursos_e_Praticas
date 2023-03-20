var hora = 4
console.log(`Agora são ${hora} horas.`)
if (hora >= 6) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 24) {
    console.log('Boa noite!')
} else if (hora >= 1 || hora <= 5) {
    console.log('Boa madrugada!')
}
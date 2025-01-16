/* Dado o CPF de uma pessoa, o qual pode conter pontos ou traços como separadores, retorne o CPF contendo somente dígitos. */

function removeNonDigits(string) {
    const regex = /\D/g;
    return string.replace(regex, "")
}

console.log(removeNonDigits("87409217293"))
console.log(removeNonDigits("874092172-93"))
console.log(removeNonDigits("874.092.172-93"))
/* Problema "senha"
Um sistema exige que, no cadastro, a senha do usuário tenha pelo menos 8 caracteres no
total, pelo menos uma letra (maiúscula ou minúscula), pelo menos um dígito e pelo menos
um caractere especial: @, #, &. Fazer um programa para dizer se uma dada senha é válida
ou inválida. */

function validatePassword(str) {
    const regex = /[A-Za-z]{1,}[0-9]{1,}[@/#/&]{1,}/
    return regex.test(str) ? "VALIDA" : "INVALIDA"
}

console.log(validatePassword("amerca1@"))
console.log(validatePassword("amrca154682"))
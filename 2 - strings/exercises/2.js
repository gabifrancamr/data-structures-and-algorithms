/* Problema "dominio-email"
Dado um email de uma pessoa, mostrar o nome de usuário e o domínio deste email. O programa deve também informar se o domínio é brasileiro (.br). Supor um email válido. */

function removeItem(string) {
    return string.replace("@", "");
}

function isBrazilian(email) {
    const regex = /\.br$/ 
    return regex.test(email)
}

function extractEmailInformation(email) {
    const userRegex = /[A-Za-z0-9._%+-]+@/
    const userEmail = email.match(userRegex)
    const user = removeItem(userEmail[0])

    const domRegex = /@+[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    const domEmail = email.match(domRegex)
    const dom = removeItem(domEmail[0])
    
    const brazilian = isBrazilian(email)

    return {
        Usuário: user,
        Domínio: dom,
        Brasileiro: brazilian ? "sim" : "não"
    }
}

console.log(extractEmailInformation("maria123@gmail.com"))

console.log(extractEmailInformation("joao.silva23@yahoo.com.br"))

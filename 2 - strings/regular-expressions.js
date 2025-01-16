// Exemplo 1: queremos verificar se um CEP é valido, ou seja, se ele possui 8 dígitos, podendo ou não ter um hífen entre o quinto e sexto dígito.
function validateCEP(cep) {
  const regex = /^\d{5}-?\d{3}$/;
  return regex.test(cep);
}

console.log(validateCEP("12345-678")); // true
console.log(validateCEP("12345678")); // true
console.log(validateCEP("1234-5678")); // false


// Exemplo 2: queremos remover de um CPF qualquer caractere que não seja um dígito.
function removeNonDigits(string) {
    const regex = /\D/g;
    return string.replace(regex, "");
}

console.log(removeNonDigits("94923784799"));
console.log(removeNonDigits("213.445.034-82"));

// Exemplo 3: verifique se um dado domínio termina com .br
function validateBrDomain(domain) {
    const regex = /\.br$/;
    return regex.test(domain);
}

console.log(validateBrDomain("batata.com.br")); // true
console.log(validateBrDomain("banana.com"));  // false


// Exemplo 4: encontre todos endereços de email em um texto.
function findEmails(string) {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = string.match(regex);
    if (result) {
        return result;
    }
    return [];
}

const text = "Para mais informações, contate-nos em contato@exemplo.com ou suporte@exemplo.com.br.";

const emails = findEmails(text);

if (emails.length > 0) {
    console.log("Emails encontrados:");
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }
}
else {
    console.log("Nenhum email encontrado.")
}

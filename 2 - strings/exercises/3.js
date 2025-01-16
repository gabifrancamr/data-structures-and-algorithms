/* Problema "data1"
Dada uma data que poderá estar no formado dia/mês/ano, sendo que o dia e mês menor
que 10 pode ou não ter zero à esquerda, mostrar o dia, mês e ano separadamente, na
forma numérica. Supor uma data válida.
*/

function removeNonDigits(string) {
    const regex = /\D/g;
    return string.replace(regex, "");
}

function extractDateData(date) {
    const dayRegex = /[0-9]{1,}\//
    const day = date.match(dayRegex)

    const monthRegex = /\/[0-9]{1,}\//
    const month = date.match(monthRegex)

    const yearRegex = /\/[0-9]{4}/
    const year = date.match(yearRegex)

    return {
        Dia: removeNonDigits(day[0]),
        Mês: removeNonDigits(month[0]),
        Ano: removeNonDigits(year[0])
    }
}

console.log(extractDateData("9/7/2024"))
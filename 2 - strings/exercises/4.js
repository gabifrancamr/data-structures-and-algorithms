/* Problema "data2"
Dados um dia, mês e ano, produzir um string no formato dd/mm/aaaa, preenchendo com
zeros à esquerda o dia e mês, se necessário. */

function formatDate(day, month, year) {
    const date = `${day}/${month}/${year}`
    return date
}

console.log(formatDate("21", "07", "2010"))
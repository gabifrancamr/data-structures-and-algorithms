function totalSales(sales, department) {
    return salesTailRecursive(sales, department, 0, 0)
}

function salesTailRecursive(sales, department, quantity, total) {
    if (sales.length === 0) {
        return {
            'quantidade de vendas': quantity,
            'valor': total.toLocaleString(2)
        }
    }

    const head = sales[0]
    const tail = sales.slice(1)

    const headArray = head.split(",")

    if (headArray[3] === department) {
        quantity++
        total += Number(headArray[2])
    }

    return salesTailRecursive(tail, department, quantity, total)
}

console.log(totalSales(
    [
        "8349,14/09/2024,899.9,ESPORTE",
        "4837,17/09/2024,530.0,VESTUARIO",
        "15281,21/09/2024,1253.99,ESPORTE",
        "15344,27/09/2024,1000.9,VESTUARIO",
        "18317,04/10/2024,250.4,VESTUARIO",
        "18972,11/10/2024,385.5,JARDINAGEM"
    ], "VESTUARIO"))
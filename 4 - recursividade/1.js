function sumNaturals(n) {
    if (n == 0) {
        return 0
    }

    return n + (sumNaturals(n - 1))
}

console.log(sumNaturals(5))
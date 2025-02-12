function factorial(n) {
    return factorialTailRecursive(n, 1)
}

function factorialTailRecursive(n, total) {
    if (n == 0) {
        return total
    }

    return factorialTailRecursive((n - 1), (n * total))
}

console.log(factorial(0))
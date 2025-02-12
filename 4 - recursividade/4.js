function fibonacci(n) {
    return fibonacciTailRecursive(n, 0, 1)
}

function fibonacciTailRecursive(n, x, y) {
    if (n == 0) {
        return x
    }

    if (n == 1) {
        return y
    }

    return fibonacciTailRecursive((n - 1), y, (x + y))
}

console.log(fibonacci(7))
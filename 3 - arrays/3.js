function findEvenNumberDigits(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length % 2 === 0) {
            count++
        }
    }

    return count
}

console.log(findEvenNumberDigits([12, 345, 2, 6, 7896]))
console.log(findEvenNumberDigits([555, 901, 482, 1771]))

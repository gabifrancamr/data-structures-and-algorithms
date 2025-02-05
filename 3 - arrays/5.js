function sortedSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        const square = array[i] * array[i]
        newArray.push(square)
    }

    return newArray.sort((a, b) => a - b)
}

console.log(sortedSquare([-4, -1, 0, 3, 10]))
console.log(sortedSquare([-7, -3, 2, 3, 11]))
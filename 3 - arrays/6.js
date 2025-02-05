function duplicateZeros(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === 0) {
            array.splice(i, 0, 0)
            array.pop()
        }
    }

    return array
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
// console.log(duplicateZeros([-7, -3, 2, 3, 11]))
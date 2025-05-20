function binarySearch(numbers, key) {
    let low = 0
    let middle
    let high = numbers.length - 1

    while (low <= high) {
        middle = Math.floor((low + high) / 2)
        if (key < numbers[middle]) {
            high = middle - 1
        } else if (key > numbers[middle]) {
            low = middle + 1
        } else {
            return middle
        }
    }

    return -1
}

console.log(binarySearch([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 34)); // 9
console.log(binarySearch([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 10)); // -1
console.log(binarySearch([-10, -3, 4, 11, 13, 18, 44, 64, 91, 225, 431], 11)); // 3
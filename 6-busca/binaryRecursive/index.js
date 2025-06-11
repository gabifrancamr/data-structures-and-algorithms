function binarySearch(numbers, key) {
    let low = 0
    let high = numbers.length - 1
    return binarySearchTailRecursive(numbers, key, low, high)
}

function binarySearchTailRecursive(numbers, key, low, high) {

    if (low > high) {
        return -1
    }

    let middle = Math.floor((low + high) / 2)

    if (key == numbers[middle]) {
        return middle
    } else if (key > numbers[middle]) {
        low = middle + 1
        return binarySearchTailRecursive(numbers, key, low, high)
    } else if (key < numbers[middle]) {
        high = middle - 1
        return binarySearchTailRecursive(numbers, key, low, high)
    }

}

console.log(binarySearch([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 34)); // 9
console.log(binarySearch([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 10)); // -1
console.log(binarySearch([-10, -3, 4, 11, 13, 18, 44, 64, 91, 225, 431], 11)); // 3
function mergeArrays(array1, m, array2, n) {
    for (let i = 0; i < n; i++) {
        array1[m + i] = array2[i]
    }

    return array1
}

console.log(mergeArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

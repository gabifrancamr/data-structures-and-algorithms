function insertSort(array) {
    for(let i = 1; i < array.length; i++) {
        let aux = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > aux) {
            array[j + 1] = array[j]
            j--
        }

        array[j + 1] = aux
    }

    return array
}

console.log(insertSort([20, 9, 86, -2, 16, 13, 34, 4]))
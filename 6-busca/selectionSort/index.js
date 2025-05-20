function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let minIndex = i

        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        if(minIndex !== i) {
            swap(array, i, minIndex)
        }
    }

    return array
}

function swap(array, i, j) {
    const aux = array[i]
    array[i] = array[j]
    array[j] = aux
}

console.log(selectionSort([20, 9, 86, -2, 16, 13, 34, 4]))
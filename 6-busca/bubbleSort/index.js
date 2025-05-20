function bubble_sort(arr) {
    const N = arr.length;

    for (let i = 0; i < N; i++) {
        let swapped = false
        for (let j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                swapped = true
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr
}

function swap(arr, a, b) {
    const aux = arr[a]
    arr[a] = arr[b]
    arr[b] = aux
}


console.log(bubble_sort([20, 9, 86, -2, 16]))
console.log(bubble_sort([1, 2, 3, 4, 5]))
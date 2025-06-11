function quickSort(nums, left, right) {
    if(left < right) {
        let pivot = partition(nums, left, right)
        quickSort(nums, left, pivot - 1)
        quickSort(nums, pivot + 1, right)
    }

    return nums
}

function partition(nums, left, right) {
    const pivot = nums[right]
    let i = left

    for(let j = left; j < right; j++) {
        if(nums[j] <= pivot) {
            swap(nums, j, i)
            i++
        }
    }

    swap(nums, i, right)
    return i
}

function swap(nums, a, b) {
    const aux = nums[a]
    nums[a] = nums[b]
    nums[b] = aux
}

console.log(quickSort([20, 9, 86, -2, 16, 13, 34, 4], 0, 7))
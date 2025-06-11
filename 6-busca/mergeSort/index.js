function mergeSort(nums, left, right) {
    if(left < right) {
        let middle = Math.floor((right + left) / 2) 
        mergeSort(nums, left, middle)
        mergeSort(nums, middle + 1, right)
        merge(nums, left, middle, right)
    }

    return nums
}

function merge(nums, left, middle, right) {
    const result = []
    const length = right - left + 1
    let i = left
    let j = middle + 1
    let k = 0

    while(i <= middle && j <= right) {
        if(nums[i] < nums[j]) {
            result[k++] = nums[i++]
        } else {
            result[k++] = nums[j++]
        }
    }

    while(i <= middle) {
        result[k++] = nums[i++]
    }

    while(j <= right) {
        result[k++] = nums[j++]
    }

    for(let i = 0; i < length; i++) {
        nums[left + i] = result[i]
    }
}

console.log(mergeSort([20, 9, 86, -2, 16, 13, 34, 4], 0, 7))
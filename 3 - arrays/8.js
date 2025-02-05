function containsDuplicate(array) {
    const count = {}

    for (let item of array) {
        if (count[item]) {
            return true
        }
        count[item] = true
    }

    return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
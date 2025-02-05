function dotProductTwoArrays(array) {
    const arr1 = array[0]
    const arr2 = array[1]
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i] * arr2[i]
    }

    return sum;
}

console.log(dotProductTwoArrays([[1, 0, 0, 2, 3], [0, 3, 0, 4, 0]]));
console.log(dotProductTwoArrays([[0, 1, 0, 0, 0], [0, 1, 0, 0, 0]]));
console.log(dotProductTwoArrays([[0, 1, 0, 0, 2, 0, 0], [1, 0, 0, 0, 3, 0, 4]]));
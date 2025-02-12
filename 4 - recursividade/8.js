function sumList(list) {
    if (list.length == 0) {
        return 0
    }

    const head = list[0]
    const tail = list.slice(1)

    return head + sumList(tail)
}

console.log(sumList([4, 5, 3]))
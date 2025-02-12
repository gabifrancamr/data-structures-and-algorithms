function mergeLists(a, b) {
    if (a.length === 0) {
        return b
    }

    if (b.length === 0) {
        return a
    }

    const headA = a[0]
    const tailA = a.slice(1)

    const headB = b[0]
    const tailB = b.slice(1)

    return [headA, headB].concat(mergeLists(tailA, tailB))

}

console.log(mergeLists([10, 20, 30], [5, 8, 7]))
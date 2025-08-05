class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
}

let linkedList = new LinkedList()

const node1 = new Node("A")
const node2 = new Node("B")
const node3 = new Node("C")

node1.next = node2
node2.next = node3

console.log(node1.value)
console.log(node1.next.value)
console.log(node2.next.value)
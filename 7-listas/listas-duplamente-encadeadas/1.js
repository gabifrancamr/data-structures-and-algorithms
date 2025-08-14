class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addAtEnd = (elem) => {
        const node = new Node(elem)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
            this.size++
            return
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        this.size++
        return
    }

    addToStart = (elem) => {
        const node = new Node(elem)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
            this.size++
            return
        }

        this.head.prev = node
        node.next = this.head
        this.head = node
        this.size++
        return
    }
    
    addAtPosition = (elem, index) => {
        const node = new Node(elem)

        if(index <= 0) {
            this.addToStart(elem)
            return
        }

        if(index == this.getSize() || !this.get(index)) {
            this.addAtEnd(elem)
            return
        }

        let i = 0
        let current = this.head

        while(i !== index) {
            current = current.next
            i++
        }

        current.prev.next = node
        node.prev = current.prev
        node.next = current
        current.prev = node
        this.size++
        return
    }

    removeAtHead = () => {
        if(this.isEmpty()) return null

        let current = this.head.next

        if(current == null) {
            this.head = null
            this.tail = null
            this.size--
            return
        }

        current.prev = null
        this.head = current
        this.size--
        return
    }

    removeTail = () => {
        if(this.isEmpty()) return null

        if(this.getSize() == 1) {
            this.head = null
            this.tail = null
            this.size--
            return
        }

        let current = this.tail.prev

        current.next = null
        this.tail = current
        this.size--
        return
    }

    removeAtPosition = (index) => {
        if(index < 0 || index >= this.getSize()) {
            return null
        }

        if(index == 0) {
            return this.removeAtHead()
        }

        if(index == this.getSize() - 1) {
            return this.removeTail()
        }

        let current = this.head
        let i = 0

        while(i < index) {
            current = current.next
            i++
        }

        current.prev.next = current.next
        current.next.prev = current.prev
        this.size--
        return
    }

    removeElement = (elem) => {
        const index = this.indexOf(elem)

        if(index === -1) {
            return null
        }

        return this.removeAtPosition(index)
    }

    get = (index) => {
        let current = this.getNode(index)
        if(current) {
            return current.value
        } 
        return null
    }

    getNode = (index) => {
        if(index < 0 || index >= this.size) {
            return null
        }

        let current = this.head
        let currentIndex = 0

        while(currentIndex !== index) {
            current = current.next
            currentIndex++
        }

        if(current) {
            return current
        } 

        return null
    }

    indexOf = (elem) => {
        let current = this.head
        let index = 0

        while(current) {
            if(current.value == elem) {
                return index
            }
            current = current.next
            index++
        }

        return -1
    }

    contains = (elem) => {
        const index = this.indexOf(elem)
        if(index !== -1 ) {
            return true
        } else {
            return false
        }
    }

    isEmpty = () => {
        return this.head === null
    }

    getSize = () => {
        return this.size
    }


    toArray = () => {
        let current = this.head
        const output = []
        while(current !== null) {
            output.push(current.value)
            current = current.next
        }
        return output
    }

    clear = () => {
        this.head = null
        this.prev = null
        this.size = 0
    }

    printNode = () => {
        let current = this.head

        while(current) {
            console.log(current)
            current = current.next
        }

        return
    }

    reverse = () => {
        const nodeHead = this.head
        const nodeTail = this.tail

        this.head = nodeTail
        this.tail = nodeHead

        let current = nodeHead

        while(current) {
            let aux = current.next
            current.next = current.prev
            current.prev = aux
            current = aux
        }
    }
}

const list = new DoubleLinkedList()

list.addAtEnd(20)
list.addAtEnd(9)
list.addAtEnd(86)
list.addAtEnd(-2)
list.addAtEnd(16)
list.addAtEnd(23)
list.addToStart(5)
// console.log(list.toArray())


// list.addAtPosition(4, 1)
// list.addAtPosition(100, 7)
// list.addAtPosition(200, -2)
console.log(list.toArray())

list.reverse()
console.log(list.toArray())
console.log(list.printNode())
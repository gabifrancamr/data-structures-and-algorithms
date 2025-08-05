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

    addItem = (elem) => {
        const element = new Node(elem)

        if (this.head == null) {
            this.head = element
            this.size++
            return
        }

        let current = this.head
        while (current.next != null) {
            current = current.next
        }

        current.next = element
        this.size++
    }

    addAtStart = (elem) => {
        const element = new Node(elem)

        if (this.head == null) {
            this.head = element
            this.size++
            return
        }
        const aux = this.head
        this.head = element
        element.next = aux
        this.size++
    }

    indexOf = (elem) => {
        let current = this.head
        let i = 0

        while (current) {
            if (current.value == elem) {
                return i
            } else {
                current = current.next
                i++
            }
        }

        return -1
    }

    contains = (elem) => {
        let indexElem = this.indexOf(elem)

        if (indexElem != -1) {
            return true
        }
        return false

    }

    printLinkedList = () => {
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }

    getSize = () => {
        return this.size
    }

    isEmpty = () => {
        if (this.head == null) {
            return (true)
        }
        return (false)
    }

    clear = () => {
        this.head = null
        this.size = 0
    }

    getNode = (index) => {
        if (index < 0 || index >= this.size) {
            return null
        }

        let i = 0
        let current = this.head

        while (i !== index) {
            current = current.next
            i++
        }

        if (current) {
            return current
        }
        return null
    }

    addAtPosition = (item, index) => {
        if (index == 0) {
            this.addAtStart(item)
            return
        }

        if (index == this.size) {
            this.addItem(item)
            return
        }

        const prev = this.getNode(index - 1)
        const element = new Node(item)

        element.next = prev.next
        prev.next = element

        this.size++
    }

    get = (index) => {
        let current = this.getNode(index);
        if (current)
            return current.value;
        return null;
    };

    removeAtPosition = (index) => {
        if (this.isEmpty() || !this.get(index)) {
            return null
        }

        let item = null
        let aux = null

        if(index == 0) {
            item = this.head.value
            this.head = this.head.next
            this.size = this.size - 1
            return item
        }

        if(index == this.getSize() - 1) {
            item = this.get(index)
            aux = this.getNode(index - 1)
            aux.next = null
            this.size = this.size - 1
            return item
        }

        aux = this.getNode(index - 1);
        item = aux.next.value
        aux.next = aux.next.next
        this.size = this.size - 1
        return item
    }

    remove = (elem) => {
        let index = this.indexOf(elem)

        if(this.isEmpty() || index == -1) {
            return false
        }

        this.removeAtPosition(index)
        return true
    }
}

let linkedList = new LinkedList()

linkedList.addItem(20)
linkedList.addItem(9)
linkedList.addItem(86)
linkedList.addAtStart(2)

// linkedList.printLinkedList()
// linkedList.getSize()
// linkedList.isEmpty()

linkedList.addAtPosition(3, 1)
linkedList.printLinkedList()

// console.log("Posição do elemento 9 é: " + linkedList.indexOf(9))
// console.log("9 está na lista? " + linkedList.contains(9))

// console.log("removendo elemento da posição 2: " + linkedList.removeAtPosition(2))

console.log("removendo elemento 9: " + linkedList.remove(9))

linkedList.printLinkedList()
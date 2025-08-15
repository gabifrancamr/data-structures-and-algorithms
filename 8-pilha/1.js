export default class Stack {
    constructor(size = 100) {
        this.size = size
        this.arr = new Array(size)
        this.top = -1
    }

    push(item) {
        if(this.isFull) {
            throw new Error("Stack is full")
        }
        this.top++
        this.arr[this.top] = item
    }

    pop() {
        if(this.isEmpty) {
            throw new Error("Stack is empty")
        }
        const item = this.arr[this.top]
        // this.arr[this.top] = null
        this.top--
        return item
    }

    isEmpty() {
        return this.top === -1
    }

    isFull() {
        return this.top === this.size - 1
    }

    count() {
        return this.top + 1
    }

    peek() {
        if(this.isEmpty) {
            throw new Error("Stack is empty")
        }
        return this.arr[this.top]
    }
}

const stack = new Stack(2)

console.log("stack.isEmpty: " + stack.isEmpty())
console.log("stack.count: " + stack.count())

stack.push("Maria")
stack.push("João")
stack.push("Ana")

console.log("stack.isEmpty: " + stack.isEmpty())
console.log("stack.count: " + stack.count())
console.log("stack.peek: " + stack.peek())

// stack.pop()
// console.log("Array: " + stack.arr)

while(!stack.isEmpty()) {
    const item = stack.pop()
    console.log(item)
}

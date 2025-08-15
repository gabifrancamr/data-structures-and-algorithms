export default class Stack {
    constructor() {
        this.list = []
    }

    push(item) {
        this.list.push(item)
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.list.pop()
    }

    isEmpty() {
        return this.list.length === 0
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.list[this.list.length - 1]
    }

    count() {
        return this.list.length
    }
}

const stack = new Stack()

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
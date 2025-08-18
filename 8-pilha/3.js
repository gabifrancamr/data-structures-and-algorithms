function isBalanced(text) {
    let count = 0

    for(let i = 0; i < text.length; i++) {
        if(text[i] === "(") {
            count++
        } else {
            count--
        }

        if(count < 0) {
            return false
        }
    }

    return true
}

console.log(isBalanced("(())()")); // true
console.log(isBalanced("())(")); // false
function isPalindrome(text) {
    const head = text[0]
    const last = text[text.length - 1]
    const tail = text.slice(1, text.length - 1)

    if (head !== last) {
        return false
    }

    if (text.length === 0 || text.length === 1) {
        return true
    }

    return isPalindrome(tail)
}

console.log(isPalindrome("aba"))
console.log(isPalindrome(""))
console.log(isPalindrome("abcfba"))
console.log(isPalindrome("abccba"))
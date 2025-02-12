function charCount(ch, text) {
    const chUpperCase = ch.toUpperCase()
    const textUpperCase = text.toUpperCase()

    return charCountTailRecursive(chUpperCase, textUpperCase)
}

function charCountTailRecursive(ch, text, count = 0) {
    if (text.length === 0) {
        return count
    }

    const head = text[0]
    const tail = text.slice(1)

    if (head === ch) {
        count++
    }

    return charCountTailRecursive(ch, tail, count)
}


console.log(charCount("b", "Batata para o bebê"))
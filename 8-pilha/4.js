function validParentheses(text) {
    let countP = 0
    let countK = 0
    let countC = 0

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "(":
                countP++
                break;
            case ")":
                countP--
                break;
            case "[":
                countK++
                break;
            case "]":
                countK--
                break;
            case "{":
                countC++
                break;
            case "}":
                countC--
                break;
            default:
                break;
        }

        if(countP < 0 || countK < 0 || countC < 0) {
            return false
        }
    }

    return true
}

console.log(validParentheses("()([]{})")); // true
console.log(validParentheses("(){]{}")); // false
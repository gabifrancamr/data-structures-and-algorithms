/* Problema "valid-anagram" (ref: Leetcode valid-anagram)
Empresas: Apple, Google, Amazon, Microsoft, Adobe, Spotify, etc. Dadas duas palavras s e t, retornar true se t é um anagrama de s, ou false caso contrário. Um anagrama é um texto formado pelo rearanjo das letras em um texto diferente, tipicamente utilizando todas letras originais exatamente uma vez.
Limitações:
● 1 <= s.length, t.length <= 5 * 104
● s e t são letras minúsculas da Língua Inglesa. */

function isAnagram(s, t) {
    if(s.length !== t.length) {
        return false
    }

    const count = {}

    for(let char of s) {
        count[char] = (count[char] || 0) + 1
    }

    for(let char of t) {
        if(!count[char]) {
            return false
        }
        count[char]--
    }

    return true
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
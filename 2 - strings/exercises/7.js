/* Problema "prefixo-comum" (ref: Leetcode longest-common-prefix)
Empresas: Apple, Google, Amazon, Microsoft, Adobe, Accenture, etc.
Write a function to find the longest common prefix string amongst an array of strings. If there
is no common prefix, return an empty string "".
Constraints:
● 1 <= strs.length <= 200
● 0 <= strs[i].length <= 200
● strs[i] consists of only lowercase English letters.
 */

function longestCommonPrefix(v) {
    if(!v.length) return ""

    let prefix = v[0]

    for(let i = 0; i < v.length; i++) {
        while(v[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1)

            if(prefix === "") return ""
        }
    }

    return prefix
}

console.log(longestCommonPrefix(["flowers","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["interstellar", "internet", "interval"])); 
console.log(longestCommonPrefix(["apple", "ape", "april"]));               
console.log(longestCommonPrefix([""]));                                   
console.log(longestCommonPrefix(["a"]));
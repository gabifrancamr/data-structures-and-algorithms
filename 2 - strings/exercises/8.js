/* Problema "transacoes" (ref: Leetcode invalid-transactions)
Empresas: Apple, Google, Amazon, Microsoft, Adobe, Accenture, etc.
A transaction is possibly invalid if:
● the amount exceeds $1000, or;
● if it occurs within (and including) 60 minutes of another transaction with the same
name in a different city.
You are given an array of strings transaction where transactions[i] consists of commaseparated values representing the name, time (in minutes), amount, and city of the
transaction. Return a list of transactions that are possibly invalid. You may return the answer
in any order.
Constraints:
● transactions.length <= 1000
● Each transactions[i] takes the form "{name},{time},{amount},{city}"
● Each {name} and {city} consist of lowercase English letters, and have lengths
between 1 and 10.
● Each {time} consist of digits, and represent an integer between 0 and 1000.
● Each {amount} consist of digits, and represent an integer between 0 and 2000. */

function invalidTransactions(transactions) {
    const parsedTransactions = transactions.map(transaction => {
        const [name, time, amount, city] = transaction.split(",")
        return { name, time: parseInt(time), amount: parseFloat(amount), city, original: transaction }
    })

    const invalid = []

    for (let i = 0; i < parsedTransactions.length; i++) {
        if (parsedTransactions[i].amount > 1000) {
            invalid[i] = parsedTransactions[i]
        }
    }

    for (let i = 0; i < parsedTransactions.length; i++) {
        for (let j = i + 1; j < parsedTransactions.length; j++) {
            t1 = parsedTransactions[i]
            t2 = parsedTransactions[j]

            if (
                t1.name === t2.name && 
                t1.city !== t2.city &&
                Math.abs(t1.time - t2.time) <= 60) {
                invalid[i] = t1
                invalid[j] = t2
            }
        }
    }

    let result = []

    for(let i = 0; i < invalid.length; i++) {
        if (invalid[i]) {
            result.push(parsedTransactions[i].original);
        }
    }

    return result; 
}

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]))

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,1200,mtv"]))

console.log(invalidTransactions(["alice,20,800,mtv", "bob,50,1200,mtv"]))
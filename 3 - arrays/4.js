function bestSeller(sellers) {
    let bigValue = 0;
    let sallerName

    for (let seller of sellers) {
        if (seller.amount > bigValue) {
            bigValue = seller.amount
            sallerName = seller.name
        }
    }

    return sallerName
}

const sellers = [
    {
        "name": "Barry Allen",
        "amount": 18196.0
    },
    {
        "name": "Logan",
        "amount": 4255.0
    },
    {
        "name": "Maria",
        "amount": 10298.0
    },
    {
        "name": "Ana",
        "amount": 26485.0
    },
    {
        "name": "Aurora",
        "amount": 19982.0
    },
    {
        "name": "Noah",
        "amount": 15820.0
    },
    {
        "name": "Leo",
        "amount": 21412.0
    },
    {
        "name": "Alex",
        "amount": 12000.0
    }
]

console.log(bestSeller(sellers));
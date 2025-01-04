/*
Queremos acrescentar duas funções para lidar com produtos:
function total(product: Product): number
Parâmetros:
- product: um objeto do tipo Product
Efeito: retorna o valor total do produto (preço multiplicado pela quantidade)

function updatePrice(product: Product, percentage: number): void
Parâmetros:
- product: um objeto do tipo Product
- percentage: um valor de porcentagem
Efeito: atualiza o preço do produto, aumentando-o conforme a porcentagem dada
*/

class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    toString()  {
        return `${this.name}, ${this.price.toFixed(2)}, ${this.quantity}`
    }
}

function total (product) {
    return product.price * product.quantity
}

function updatePrice(product, percentage) {
    const percentageValue = (percentage / 100) + 1
    product.price *= percentageValue
}

const p1 = new Product("Laptop", 1000.00, 5)
const p2 = new Product("Headphones", 200.00, 2)

const total1 = total(p1)

updatePrice(p2, 50)

console.log(total1)
console.log(p2.price)

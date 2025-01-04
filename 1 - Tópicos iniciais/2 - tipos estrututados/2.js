/* 
Fazer um programa para armazenar em memória os dados de dois produtos
(nome, preço e quantidade), depois mostrar esses dados na tela.
Exemplo:
Laptop, $1000.00, 5
Headphones, $200.00, 2
*/

function Product(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity

    this.toString = function () {
        return `${this.name}, ${this.price.toFixed(2)}, ${this.quantity}`
    }
}

const p1 = new Product("Laptop", 1000.00, 5)
const p2 = new Product("Headphones", 200.00, 2)

console.log(p1.name)
console.log(p2.name)


console.log(p1.toString())
console.log(p2.toString())
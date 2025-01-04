/* 
Fazer um programa para armazenar em memória os dados de dois produtos
(nome, preço e quantidade), depois mostrar esses dados na tela.
Exemplo:
Laptop, $1000.00, 5
Headphones, $200.00, 2
*/

/*
CONCEITOS:
A classe Product define um modelo para criar objetos que representam Produtos. Ela descreve quais propriedades (name, price, quantity) e quais comportamentos (toString) um objeto Product terá.

Constructor: método que inicializa as propriedades de um objeto ao criá-lo
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

 /*
 CONCEITOS:
 Um objeto é uma instância de uma classe. Os objetos p1 e p2 são criados usando o operador new, que invoca o construtor da classe Product. As propriedades name, price e quantity são atributos de um objeto. Elas armazenam o estado do objeto.
 */

const p1 = new Product("Laptop", 1000.00, 5)
const p2 = new Product("Headphones", 200.00, 2)

console.log(p1.name)
console.log(p2.name)

/*
CONCEITOS:
o método toString() define um comportamento da classe, ou seja, como o objeto deve ser comportar quando quisermos exibi-lo com uma string.
*/

console.log(p1.toString())
console.log(p2.toString())
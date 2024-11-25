// Destruction syntax in javascript

const items = ['livro','mouse','teclado','notebook']

const [i1,i2,i3,i4] = items

console.log(i2)

// Operador ternario
const money = 50

const loanStatus = money >= 10000 ? "Você tem dinheiro suficiente" : " Você não tem dinheiro suficiente"

console.log(loanStatus)

// bitwise operators
const n1 = NaN
const n2 = NaN

console.log(n1 === n2)
console.log(Object.is(n1,n2))
// [ MAP ]
// Map é uma estrutura de dados que pode iterar seus elementos na ordem de inserção
// ele também apaga da memória seus elementos quando eles não estão sendo usados.
// Serve para quando precisamos ter um array ou objeto com dados na ordem de inserção.
// Serve para quando precisamos criar um objeto chave - valor que sua chave seja de um tipo diferente de string
// Ele só funciona com arrays de chave e valor.

const example1 = [
    ['Nome','Matheus'],
    ['Nome','Luiz'],
    ['Nome','Antonio'],
    ['Nome','Fernando']
];
// Usando map para mudar o tipo de uma chave de objeto.
const example2 = {
    true:"Matheus",
}
for(keys in example2){
    console.log(keys) // Mostra que a chave do objeto é uma string
}

const myMap2 = new Map();
for(key in example2){
    myMap2.set(Boolean(key),example2[key])
}
console.log(myMap2)

// Usando o map em casos onde precisamos adicionar a um array itens de chave e valor na ordem de inserção.
const example3 = [
    {id:3,nome:"Matheus"},
    {id:2,nome:"Luiz"},
    {id:1,nome:"Antonio"}
]; 
const myObjExample1 = {};
for(const item of example3){
    const { id } = item;
    myObjExample1[id] = item;
}
console.log(myObjExample1); // como podemos ver ele muda a ordem de inserção
const myObjExample2 = new Map();
for(const item2 of example3){
    const { id } = item2;
    myObjExample2.set(id,item2)
}
console.log(myObjExample2)

const obj3 = {
    obj4:{
        "name":"valor"
    },
    obj6:{
        "name":"valor"
    }
}
// WEAK MAP
// O weakMap aceita apenas objetos ou funções como chaves.
// Ele não é iterávél.
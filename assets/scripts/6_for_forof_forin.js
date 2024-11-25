/*
[ FOR É UMA ESTRUTURA DE REPETIÇÃO ]
 - Composto por um inicializador, condição e expressão final
 Inicializador : criar uma variavel e colocar um valor inicial.
 Condição:
 Expressão final:
*/
const nomes = [
    "Ana",
    "Bruno",
    "Carla",
    "Daniel",
    "Eduarda",
    "Fernando",
    "Gabriela",
    "Henrique",
    "Isabela",
    "João",
    "Larissa",
    "Marcos",
    "Natália",
    "Pedro",
    "Renata"
  ];  
for(let i = 0; i < nomes.length;i++){
    console.log(` Printando I :${nomes[i]}`);
}
/*
[ FOR OF ]
- Serve para iterar arrays
*/
for (let key of nomes) {
    console.log(key);
}

/*
[ SERVE PARA ITERAR UM OBJETO ]
*/
const pessoas = [
    { nome: "Ana", idade: 28 },
    { nome: "Bruno", idade: 34 },
    { nome: "Carla", idade: 25 },
    { nome: "Daniel", idade: 30 },
    { nome: "Eduarda", idade: 22 },
    { nome: "Fernando", idade: 40 },
    { nome: "Gabriela", idade: 27 },
    { nome: "Henrique", idade: 35 },
    { nome: "Isabela", idade: 29 },
    { nome: "João", idade: 33 },
    { nome: "Larissa", idade: 26 },
    { nome: "Marcos", idade: 31 },
    { nome: "Natália", idade: 24 },
    { nome: "Pedro", idade: 28 },
    { nome: "Renata", idade: 32 }
  ];
for(let key in pessoas){
    for(let nome of pessoas){
        console.log(nome[1])
    }
}  

// O for in sempre pega o indice do array ou do objeto
// O for of sempre retorna o valor de cada indice de um array.

obj = [1,2,3]

for (const index of obj){
    console.log(index)
}
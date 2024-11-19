// [ ARRAYS ]
// Arrays são objetos matrizes que permite armazenar valores de qualquer tipo.
// Seu indice é do tipo string, mas recebe numeros.

let array = new Array();
array[0] = 'matheus';
array['Matheus'] = 'matheus';
array[1] = true;
array[true] = 15;

for (key in array){
    console.log(typeof(key))
}
console.log(array);

// Para adicionar elementos em um array basta colocar o seu nome, entre chaves passar o nome para o indice e passar o valor que esse indice vai armazenar.
array[5] = "teste";

// Par alterar o valor de um array basta passar o nome do array, o nome do indice que queremos alterar o valor dentro de chaves e passar o novo valor.
array[5] = "teste2";

// quando você passa um numero de indice maior que o proximo o indice vazio do array, ele vai criar indices com valores vazios até chegar ao indice que foi passado.
console.log(array);

// Adicionando um elemento ao final do array.
array.push('elemento1');

// adicionando um elemento ao inicio do array
array.unshift('elementoInicial')

// Como remover o último elemento de um array.
array.pop();
// Como remover o primeiro elemento de um array.
array.shift();

//Como saber o tamanho de um array. : length
console.log(array.length)

// Como iterar um array:
// Podemos usar o for ou o for of
for (elements of array){
    console.log(elements)
}
array.forEach((elements)=>{
    console.log(elements);
})
// Existem também os arrays multi dimensionais que são arrays que contém outros arrays.
let array2 = [ [],[],[]];

// ordenando um arry em ordem crescente

let array3 = []
for(let i = 15;i>=0;i--){
    array3.push(i);
}
console.log(array3.sort());
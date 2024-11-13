/*
Para mudar o tipo de dado de um variavél, mudando o seu valor,
não é necessário especificar o tipo de dado antes de altera-lo
*/ 

let example = "Isso é um texto";
console.log(example);
example = 12345678;
console.log(example);

// Para converter uma string inteira para inteiro
let example2 = "10";
console.log(example2);
example2 = parseInt(example2,10);
console.log(example2);

/*
Nota:
    Precisamos especificar na função parseInt a base da conversão, 
    nesse caso decimal (10).
*/

let example3 = "2.10";
console.log(example3);
example3 = parseFloat(example3)
console.log(example3)
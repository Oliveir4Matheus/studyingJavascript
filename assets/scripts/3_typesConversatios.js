// [ CONVERSÃO DE TIPO DE DADOS EM JAVASCRIPT]

// String - Number
function returnDataType(value){
    console.log(`Valor: ${value} | Tipo: ${typeof(value)}`);
}

let example1 = "12345678910";
returnDataType(example1);

example1 = Number(example1);
returnDataType(example1);

example1 = parseInt(example1,10);
returnDataType(example1);

example1 = parseFloat(example1);
returnDataType(example1);

// Number - string

example1 = String(example1);
returnDataType(example1);

// string - boolean
example3 = "asd";
example3 = Boolean(example3);
returnDataType(example3)
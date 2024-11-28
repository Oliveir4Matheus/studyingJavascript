// arguments object é um objeto que armazena todos os parâmetros passados pra função nele mesmo como chave e valor

function arguments (a,b,c,d,...rest){
    for (let i in arguments){
        console.log(arguments[i])
    }
}

console.info(arguments(123,213,21,3213))
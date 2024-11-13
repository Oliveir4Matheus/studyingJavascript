var nome = "ana"; // Escopo global
let nome2 = "ana"; // Escopo local ( só existe dentro de onde foi instânciada)
const nome1 = "ana"; // Escopo local (possui valor imutavél).

console.log(nome);

// Exemplo pratico
if(true){
    var escopVar = 'eu sou uma variavel global';
    let escopLet = 'eu sou uma variavel local';
    const escopConst = 'eu sou uma variavel de valor imutavel dentro do bloco';
    console.log("escopo local")
    console.log(escopVar)
    console.log(escopLet)
    console.log(escopConst)
}
console.log("escopo global")
console.log(escopVar)
console.log(escopLet)
console.log(escopConst)

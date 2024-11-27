// o rest params é um parâmetros passado quando não sabemos a quantidade de parâmetros que aquela função irá receber
// ele deve ser o último parâmetro de uma função

function sum(...num){
    console.log(num.reduce((total, num) => total + num, 0))
}

sum(1,2,3,4,5)
// default params são valores que um parâmetro recebe se quando a função for chamada, nenhum valor para aquele parâmetro for passado.
function showMenssage(menssage = "Hello, essa é uma mensagem padrão"){
    console.log(menssage)
}

showMenssage("Ola, essa é uma mensagem personalizada")


function Sum(v1,v2,result = v1+v2,callback = () => console.log ("O resultado da conta é:")){
    callback()
    console.log(result)
}
Sum(10,15,() => console.log("O resultado da conta foi:::: "))
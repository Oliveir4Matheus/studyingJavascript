import axios from "axios"
/*
Por padrão o javascript é uma linguagem sincrona ou seja.
Em um código,quando uma função é chamada, o restante do código só é executado, após a finalização do bloco dessa função

function syncFunction(){
    setTimeout(()=> {
        console.log("syncFunction")
    },300)
}
    */
// o setTimeout torna a função assincrona.

/* 
O que é uma Promisse:
- É uma promessa de que algum dado vai ser retornado.

Todo método que retorna uma promiss precisa de um then e um catch.

Then - retorna a resposta da api
catch - retorna um erro caso a promisse for rejeitada.

O que é um callback:
É uma função que é executada após a função assincrona ser finalizada.
callback - chamar de volta


[O QUE É O ASYNC E O AWAIT]
async - indica pro javascript que é uma função assincrona
*/

async function getCep(cep=""){
    try {
        let response =  await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        console.log(response.data)
    }
    catch(error) {
        console.log("Ocorreu o seguinte erro:: "+error.message)
    }

}

getCep("1318514asdasd334")
/*Async await */
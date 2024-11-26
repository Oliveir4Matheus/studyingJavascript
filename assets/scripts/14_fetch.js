/*
 FETCH → Utiliza request e response para fazer solicitações na rede

Fetch → recebe uma url como parâmetro.
——→ retorna uma promiss ao ser executado
——⟶ a promiss é finalizada e armazenada dentro do response.

 */

async function searchCep (cepn){
    try {
        let cep = await fetch(`https://viacep.com.br/ws/${cepn}/json/`)
        result = await cep
        console.log(result.json())
    }
    catch (e){
        console.log("Ocorreu um erro inesperado  :"+e)
    }

}
searchCep("0100asd1000")
/*
 FETCH → Utiliza request e response para fazer solicitações na rede

Fetch → recebe uma url como parâmetro.
——→ retorna uma promiss ao ser executado
——⟶ a promiss é finalizada e armazenada dentro do response.

 */

async function searchCep (cepn){
    try {
        let cep = await fetch(`https://viacep.com.br/ws/${cepn}sad/json/`)
        if(!cep.ok){
            throw new Error("Rota invalida")
        }
        data = await cep.json()
        console.log(data)
    }
    catch (e){
        console.log("Ocorreu o seguinte erro  :"+e)
    }

}
searchCep("01001000")
/*
[ O QUE É O TRY]
O try é um bloco de código usado quando precisamos lidar com uma parte do código que é sucetivél a erro 

Tudo que está dentro do try, se retornar algum erro, esse erro vai ser capturado pelo catch e pode ser tratado por ele.
*/
  function stringToNumber(value) {
    try{
        result = Number(value)
        if(isNaN(result)){
            throw new Error("O valor digitado não é um número")
        }
        console.log(result)
    }
    catch(e) {
        console.log("Ocorreu um erro! "+e.message)
    }
    finally {
       console.log("A função foi executada") 
    }
}
stringToNumber("325/gfs")

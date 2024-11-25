/*
    [ EVENTOS DE TEMPO ]
    - O setTimeOut Executa uma função depois de esperar um tempo especifico de milisegundos.
    - O setInterval ativa uma função a cada um periodo de tempo.
*/
function activateCon() {
    time = setTimeout(() => {
        console.log("hello world")
    },5000)
}

activateCon()
clearTimeout(time)


function loop() {
    let min = 25
    let seg = 0
    console.log("testando")
    timer = setInterval(()=>{
        if(seg == 0) {
            min = min-1
            seg = 59
        }
        else seg--
        console.log(`${min}:${seg}`)
    },1000)
}

loop()
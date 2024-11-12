// Objetos são variaveis compostas por propriedades e metódos.

// Adicionando propriedades para um objeto.

let example1 = {
    name : ["Matheus","Oliveira"],
    age : "21 years old",
}
// adicionando Métodos para um objeto

example2 = {
    name : ["Matheus","Oliveira"],
    age : "21 years old",
    bio : function(){
        console.log(`Nome : ${this.name} - Idade ${this.age}`);
    }
}

// - Para separar propriedades e métodos em um objeto, você deve usar virgula
// - Para atribuir uma propriedade ou método a uma variavel você deve usar :
example2.bio();

// Isso é chamado de objeto literal.

// -------------------------------------------------------------------------------
// [ COMO ACESSAR O VALOR DE UMA PROPRIEDADE DE UM OBJETO]

// Acessando o valor de uma propriedade de um objeto pelo seu nome:

console.log(example2['name']);

// -------------------------------------------------------------------------------
// [ COMO ATUALIZAR VALORES DE UMA PROPRIEDADE OU MÉTODO DE UM OBJETO]

example3 = {
    name: "S23 ULTRA",
    model : "M-S918B/Dual-SIM",
    resolution : "1440 x3088",
    Storage : "128GB",
    RAM : "12GB"
};
console.log(example3.name);
example3.name = 'S21 ULTRA'; // Altera o valor
console.log(example3.name)

// [ COMO ADICIONAR PROPRIEDADES E METÓDOS DENTOR DE UM OBJETO JÁ INSTÂNCIADO]

example3["fps"] = "120hz"; // você pode adiconar assim.
console.log(example3.fps);
example3.color = "black"; // ou também assim.
console.log(example3.color)

// Você pode também utilizar variaveis como chave ou valor de uma propriedade de um objeto.
let name = "os";
let value = "Android";
example3[name] = value; // passando a chave e o valor através de variaveis.
console.log(example3.os);

// [ COM BASE NO QUE APRENDEMOS VAMOS FAZER ALGO MAIS COMPLEXO]

example3.addData = function (name,model,resolution,storage,ram,fps,color,os){
    this.name = name;
    this.model = model;
    this.resolution = resolution;
    this.storage = storage;
    this.ram = ram;
    this.fps = fps;
    this.color = color;
    this.os = os;
}
example3.addData("Smartphone","S21 ULTRA","4K","512GB","12GB","120hz","Green","Android");
console.log(example3)

// [ O QUE É O THIS];
// O this serve para dizer que estamos acessando, atribuindo, apagando ou editando o valor de uma propriedade ou método de um objeto
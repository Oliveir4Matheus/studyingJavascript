// [O BASICO SOBRE OBJETOS]

// Objetos são variaveis compostas por propriedades e metódo.

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
//Isso é chamado de objeto literal.

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

//-------------------------------------------------------------------------------

// [ O INTERMEDIARIO SOBRE OBJETOS]

/* 
Os métodos construtores são métodos utilizados para construção de um objeto.
É através deles que passamos para o objeto propriedades e metodos que ele deverá ter.
também é com eles que conseguimos permitir que um objeto herde metodos e propriedades de outro objeto.
Isso permite que utilizemos as mesmas propriedades e metodos de um objeto em varios objetos e caso precisemos fazer alterações neles
apenas modificamos isso no método construtor e o mesmo vai se replicar os objetos que os herdam.
*/ 

function note(name,text){
    this.name = name,
    this.text = text,

    this.showNote = function(){
        console.log(`${this.name} : ${this.text}`)
    }
    this.showNote()
}
nota1 = new note("primeira nota do dia","essa é a primeira nota do dia");
nota2 = new note("Essa é a segunda nota do dia","eu estou perdido");
nota1
nota2
// como adicionar propriedades ou metodos a um objeto (objeto pai) criado pelo método construtor.
note.prototype.id = "01";
nota2
// [ GET E SET]
/* 
GET permite criar uma propriedade que pode retornar algo após ser chamada no objeto.
 - Usada para formatar a saida da propriedade que foi criada ou de outras.
SET permite realizar uma ação com base em valor recebido após ser chamada no objeto.
 - Usada em contexto onde o valor recebido deve passar por uma validação prévia.
*/

function Item() {
    let _id; // Propriedade privada (usando uma variável interna)

    Object.defineProperty(this, 'id', {
        get: function() {
            return _id;
        },
        set: function(id) {
            if (isNaN(id)) {
                console.log("o valor não é um número");
            } else {
                _id = id; // Atualiza a propriedade privada
            }
        }
    });
}

// Exemplo de uso
example4 = new Item();
example4.id = "asdsad";
console.log(example4.id)

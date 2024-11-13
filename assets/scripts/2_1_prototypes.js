// [PROTOTYPES]
/* 
PROTOTYPES são objetos que armazenam propriedades e métodos que serão herdadas por outro objeto.
- Ao instânciar um objeto que contém suas propriedades e metodos herdados dentro de um prototype
essas propriedades e métodos, só passaram a existir, caso elas sejam utlizadas no código.


Isso permite:
- economia de mémoria, já que só passaram a existir quando forem chamados.
- evita a criação de vários métodos ou propriedades que fazem a mesma coisa, para objetos diferentes.

Como funciona:
- Ao chamar uma propriedade ou método que fazem parte de um prototype o javascript vai entender que essa propriedade ou método
não faz parte do objeto em si, e irá procurar ela dentro do prototype do objeto.
*/

// EXAMPLE

function Student(name,age,user,pass){
    this.name = name;
    this.age = age;
    this.user = user;
    this.pass = pass;
}
Student.prototype.login = function login(){
    return `${this.name} fez login`;
}
user1 = new Student("Luiz",16,"luiznho",123456)
user2 = new Student("Luasdasz",16,"luasdasiznho",123467567)
user1
user2
console.log(Object.is(user1))
// ele é usado quando um método será utilizado por varias instâncias do objeto herdado.
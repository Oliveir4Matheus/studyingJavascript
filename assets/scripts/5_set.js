// O set é uma estrutura de dados que impede que não armazena valores duplicados.
// Ele percorre os itens na sequência de inserção.

const conjunto = new Set()
// Método ADD - ADICIONA UM VALOR AO CONJUNTO

conjunto.add("teste");
conjunto.add("teste");
conjunto.add("teste1");
conjunto.add("tes2e");
console.log(conjunto);
// MÉTODO DELETE - REMOVE UM VALOR DO CONJUNTO

conjunto.delete("tes2e");
console.log(conjunto);

// MÉTODO HAS - VERIFICA SE UM VALOR EXISTE NO SET

console.log(conjunto.has("teste1"));

// CLEAR - LIMPA O CONJUNTO
conjunto.clear();
console.log(conjunto);
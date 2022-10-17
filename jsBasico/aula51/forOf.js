// ---> Especifico para objetos iteráveis, string, arrays, que possuem indices. 

const nome = ['Luiz', 'Ryan', 'Guedes'];

for (let i = 0; i < nome.length; i++) {  // ----> For clássico para Array ou String.
}

for (let i in nome) {
    console.log(nome[i])   // ----> For In retorna o indice ou chave, para string, arrays ou objetos.
} 

for (let valor of nome) { // -----> Retorna o valor, arrays ou string.
    console.log(valor);
}

nome.forEach(function (valor, indice, arrays) {
    console.log(valor, indice, arrays);
})
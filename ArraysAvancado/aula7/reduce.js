// Some todos os números. (Reduce). 
// Retorne um array com os pares (Filter).
// Retorne um array com o dobro dos valores (Map).

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = num.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
});

const pares = num.filter(numeros => numeros % 2 === 0);
const dobro = num.map(num => num * 2);

console.log(total);
console.log(pares);
console.log(dobro);
  


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 64},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);


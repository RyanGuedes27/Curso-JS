/*
Primitivos (Imutáveis) - string, number, boolean, undefind, null (bigint, symbol) - Valores copiados.

Referência (mutável) - Arrays, Objetos, Funções. Valores que apontam para o mesmo local na memória.
*/

//let a = [1,2,3];
//b = [...a]; // <-- Copiamos o valor de a para b. B agora tem seu valor independente de A.
//c = a;
//a.push('luiz');

//console.log(a,b,c);

const a = {
    nome: 'Ryan',
    sobrenome: 'Felipe'
};
const b = {...a};
a.nome = 'Guedes';
console.log(b);
console.log(a);
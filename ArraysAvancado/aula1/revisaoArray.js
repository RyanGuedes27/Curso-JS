// ----> Copiar o valor de um Array para outro:

const nome = ['Ryan', 'Guedes', 'Paz'];
const copia = [...nome];

console.log(nome);
console.log(copia);

copia.pop(); // -----> .pop() remove o último índice. 
console.log(copia);

copia.shift(); // ----> .shift() remove o primeiro índice.
console.log(copia);

copia.push('Ryan', 'Felipe', 'Luiz');
console.log(copia); // ---> .push() Adiciona um iten no array.

const nova = copia.slice(0, 3); // ----> .slice() retorna um array apartir de um íncio e um final.
console.log(nova);

const conversao = 'Ryan Guedes Paz';
const separa = conversao.split(' '); // ---> .split() converte string em array.
console.log(separa);

const conversao2 = [ 'Ryan', 'Guedes', 'Paz' ]
const conversaoString = conversao2.join(' '); // ---> .join() converte o array em string.
console.log(conversaoString);
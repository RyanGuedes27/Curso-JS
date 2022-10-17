const nomes1 = ['Ryan', 'Guedes', 'Paz', 'Felipe', 'Dev'];
const nomes2 = ['Ryan', 'Guedes', 'Paz', 'Felipe', 'Dev'];
const nomes3 = ['Ryan', 'Guedes', 'Paz', 'Felipe', 'Dev'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

const removido = nomes1.splice(0, 2);
console.log(nomes1, removido);
 
// Para remover parâmetros de um ponto até o final do array, usamos Nummer.MAX_VALUE;

const removido1 = nomes2.splice(1, Number.MAX_VALUE);
console.log(nomes2, removido1);

// Para adicionar um elemento, fazemos da seguinte forma:

const removido2 = nomes3.splice(1, 2, 'Roberto');
console.log(nomes3, removido2);
 


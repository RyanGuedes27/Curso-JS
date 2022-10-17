// ----> Atribuição via desestruturação <-----

// Indice:       0  1  2  3  4  5  6  7  8;
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const [um, , tres, , cinco] = numeros;
//console.log(um, tres, cinco);

//                  0          1            2
//                0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [, [,,seis]] = numero; <--- Forma mais complexa.
const [lista1, lista2, lista3] = numero; // <--- Forma mais fácil.
console.log(lista1[0]);
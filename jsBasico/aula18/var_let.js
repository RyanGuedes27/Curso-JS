// ECMAScript 2015 (ES6);
// Diferença de var e let;

var nome = 'Luiz';
console.log(nome);   // Com a variavel VAR, podemos redeclar uma variavel;
var nome = 'Otávio';
console.log(nome);

let nameoi = 'Ryan';  // Com a LET, ele nos mostra que a variavel já foi declarada e não é possível declarar novamente.
let suco = 'Guedes';
suco = 'Ryan Guedes'; // <-- Método correto de alterar o valor de uma variável.S
let num1 = 0.7; // number
let num2 = 0.1; // number
//console.log(num1.toString() + num2); // toString, transforma o number em string.
//console.log(num1.toFixed(2)) // toFixed mostra quantas casas decimais você quer.
//console.log(Number.isInteger(num1)); // Retorna se o valor é inteiro ou não.
//console.log(Number.isInteger(num1));

num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1));
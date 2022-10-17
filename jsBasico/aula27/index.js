// <-- Objeto Math -->

let num1 = 9.54578;
let num2 = Math.floor(num1); // <-- (Math.floor) Arredonda o numero para baixo.
let num3 = Math.ceil(num1); // <-- (Math.ceil) Arredonda o numero para cima.
let num4 = Math.round(num1); // Arredonda para o mais próximo.
console.log(num2);
console.log(num3);
console.log(num4);
console.log(Math.max(1,2,3,10,-5,1000,1500,1)); // <-- (Math.max) Pega o maior numero da sequência.
console.log(Math.min(-1,-2,-3,5,4,8,7,987,1,1000,-50)); // <-- (Math.min) Pega o menor numero da sequência.
console.log(Math.round(Math.random() * (10 - 5) + 5)); // <-- (Math.random) Gera um numero randomico. 
console.log(Math.pow(2,10)); // <-- (Math.random) Realiza uma elevação.

let num5 = 9;
console.log(num5 ** (1/2)); // <-- Calculo raiz quadrada.
console.log(num5 ** 0.5); // <-- Outro método de calcular a raiz quadrada.

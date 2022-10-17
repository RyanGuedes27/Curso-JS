/*
Ryan Guedes tem 20 anos, pesa 55 kg
tem 1.7 de altura e seu IMC é de X
*/

const nome = 'Ryan Guedes';
const altura = 1.73;
const idade = 20;
const peso = 55;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é', imc); // Primeira forma.
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é ${imc}`); // Segunda forma.
console.log(`${nome} tem ${idade} e nasceu em ${anoNascimento}`); // <-- Melhor forma de utilizar.


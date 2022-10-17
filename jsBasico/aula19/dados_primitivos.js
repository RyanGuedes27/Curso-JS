// String, number, undefined, null, boolean, symbol;

const nome = 'Ryan'; // String com aspas simples;
const nome1 = "Guedes"; // String com aspas duplas;
const nome2 = `Ryan Guedes`; // String com crase;
console.log(`Olá ${nome}, olá ${nome1}, olá ${nome2}`); // ${} templates para se colocar uma variável dentro da string;

const num1 = 10; // Number;
const num2 = 10.52; // Number;

let nomeAluno; // Undefined -> não aponta para local nenhuma na memória;
let sobreNomeAluno = null; // Nulo -> Não aponta para local nenhum da memória;
const boolean = true; 'ou', false; // Boolean = somente true ou false (Valor lógico.);

console.log(typeof nome, nome); // Tipo da variável com TYPEOF;

let a = 2;
let b = a;
console.log(a, b);
a = 3
console.log(a, b)
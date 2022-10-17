// Testes com ordem de precedência.

num1 = 5;
num2 = 10;
num3 = 15;
console.log(num1 + num2 / num3); // Divisão foi efetuada primeiro.
// <-- Vamos adicionar uma ordem -->
console.log((num1 + num2) / num3);
console.log((num1 * (num2 / num3)) ** num1);

console.log((num1 + num2) + (num2 + num1) + (num2 / num1))
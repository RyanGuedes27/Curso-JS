/* Aritméticos  

+ Soma e concatenação;
- Subtração;
* Multiplicação;
/ Divisão;
** Potenciação;
% Resto da divisão;

*/

const num1 = 10;
const num2 = 6;
console.log(num1 % num2);

/* Ordem de precedência;
1° - () 
2° - **
3° - * / %
4° - + -
*/

let contador = 1;
//contador++; Colocando o incremento após, ele ira somar depois;
console.log(++contador); // Colocando o incremente antes, ele irá somar e mostrar o valor;
// Mesma ideia para o decremento que usamos o --
// Operador de incremento ++

let contador1 = 2;
contador1 **= 2;     
contador1 **= 2;
contador1 **= 2;
console.log(contador1);

const papi = 10;
const ruler = parseFloat('5.88'); //Convertendo String em Number com parseInt ou parseFloat;
const faker = Number('8.75'); //Convertendo String em Number com Number;
console.log(papi + ruler);
console.log(faker + ruler);


// Escreva um função que recebe um numero e retorne o seguinte:
/* Número é divisivel por 3 = Fizz.
   Número é divisivel por 5 = Buzz.
   Número é divisivel por 3 e 5 = FizzBuzz.
   Número não é divisivel por 3 e 5 = retorna o próprio número.
   Checar se o numero é realmente um número.
   Use a função com numeros de 0 a 100. 
*/ 

function divisao(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    
    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, divisao(i))
}

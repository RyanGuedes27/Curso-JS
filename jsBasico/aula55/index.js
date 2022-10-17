// Escreva uma função que recebe dois numeros e retorne o maior deles.

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random (10, 30);
console.log(`Primeiro numero: ${rand}`);

let rand2 = random (10, 30);
console.log(`Segundo numero: ${rand2}`);

const result = (x, y) => x > y ? x : y;
console.log(`O maior é: ${result(rand, rand2)}`);

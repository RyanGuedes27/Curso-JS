const frutas = ['Banana', 'Maçâ', 'Uva'];

for (let indice in frutas) { // <-- Lê o índice.
    console.log(frutas[indice]);
}

// --> For In lê o indice ou chaves do obejeto. 

const pessoa = {
    nome: 'Ryan',
    sobrenome: 'Guedes',
    idade: 10
};

for (let key in pessoa) {
    console.log(key,  pessoa[key]);
}
// --------> For - Clássico - Estrutura de repetição <------------

const frutas = ['Maça', 'Pêra', 'Uva'];
for (let i = 2; i < frutas.length; i++) {
    console.log(frutas[i]);
}

const carro = ['Hyundai', 'Honda','Wolkswagem'];
for (let i = 1 ; i >= carro.length; i++) { // <-- Mostrando o nome do índice que foi colocado dentro do i.
    console.log([i]);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar';  // <-- Verificando se o numero é impar ou par.
    console.log(i, par);
}


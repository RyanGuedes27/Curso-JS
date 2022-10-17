// ------> Atribuição via desestruturação (Objetos) <--------

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {  // <--- Super normal usar OBJETO dentro de outro OBJETO.
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome, ...resto } = pessoa ; // <--- Usando o rest operator para pegar o restantes das informações.
console.log(resto);
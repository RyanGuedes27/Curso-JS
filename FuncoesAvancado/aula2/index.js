//function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//    total += argumento;
//   }
//   console.log(total);
//}   
//funcao(1, 2, 3);

// Quando a função é definida com a palavra FUNCTION temos o recurso ARGUMENTS. O arguments guarda toda informação colocada no parêntese da função, mesmo sem definir parâmentro. 

//function valores({ nome, sobrenome, idade}) {  // Exibindo a função com desestruturação via atribuição.
//    console.log(nome, sobrenome, idade);
//    
//}
//let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
//valores(obj);

const conta = function (operador, acumlador, ...numeros) { // const conta = function : É denominada function expression 
   console.log(arguments);
};
conta('+', 0, 20, 30, 40, 50);
function retornaFuncao() {
    const nome = 'Ryan';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao;
console.log(funcao);
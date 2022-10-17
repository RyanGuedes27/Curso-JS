try {
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou erro')
    console.log('Fechei o arquivo');
    // É executado quando não tem erros.
} catch (e) {
    console.log('Tratando o erro');
    // É executado quando tem erros.
} finally {
    console.log('Eu sempre sou executado');
    // Sempre é executado.
}


function horas(data) {
    if (data && !(data instanceof Date)) {
       throw new TypeError('Esperando instância de Date.');       
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    })
}

try {
const hora = horas();
console.log(hora);
} catch(e) {
    //Tratar erro.
} finally {
    console.log('tenha um bom dia.')
}
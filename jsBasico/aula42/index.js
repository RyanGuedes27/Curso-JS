// --> OBJETO DATE <--

/*const data = new Date(0);
console.log(data.toString());
*/

//const data = new Date(1663590149173);
//console.log(data.toString());
//console.log('Dia', data.getMinutes())
//console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // <- Todo numero menor que 10, terá um 0 adicionado a esquerda. O 'num', está vindo de dentro da função formataData.
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate()); // <-- Utilizando a function zeroAEsquerda.
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

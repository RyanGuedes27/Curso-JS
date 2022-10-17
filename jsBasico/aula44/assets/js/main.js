const data = new Date();
const diaDaSemana = data.getDay();
let diaSemanaTexto;

switch (diaDaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
}

const mes = data.getMonth();
let qualMes;

switch (mes) {
    case 0:
        qualMes = 'Janeiro';
        break;
    case 1:
        qualMes = 'Fevereiro';
        break;
    case 2:
        qualMes = 'Março';
        break;
    case 3:
        qualMes = 'Abril';
        break;
    case 4:
        qualMes = 'Maio';
        break;
    case 5:
        qualMes = 'Junho';
        break;
    case 6:
        qualMes = 'Julho';
        break;
    case 7:
        qualMes = 'Agosto';
        break;
    case 8:
        qualMes = 'Setembro';
        break;
    case 9:
        qualMes = 'Outubro';
        break;
    case 10:
        qualMes = 'Novembro';
        break;
    case 11:
        qualMes = 'Dezembro';
        break;
    default:
        qualMes = 'Mês não encontrado no calendário mundial.'

}

const diaAtual = data.getDate();
const anoAtual = data.getFullYear();

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${hora}:${min}`
}

const dataBrasileira = formataData(data);
const resultado = document.querySelector('.resultado')
resultado.innerHTML += `${diaSemanaTexto}, ${diaAtual} de ${qualMes} de ${anoAtual} as ${dataBrasileira}`;
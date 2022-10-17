// -----> Switch / Case <------- //

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






//if (diaDaSemana === 0) {
//    diaSemanaTexto = 'Domingo';
//} else if (diaDaSemana === 1) {
//    diaSemanaTexto = 'Segunda';
//} else if (diaDaSemana === 2) {
//    diaSemanaTexto = 'Terça';
//} else if (diaDaSemana === 3) {
//    diaSemanaTexto = 'Quarta';
//} else if (diaDaSemana === 4) {
//    diaSemanaTexto = 'Quinta';
//} else if (diaDaSemana === 5) {
//    diaSemanaTexto = 'Sexta';
//} else if (diaDaSemana === 6) {
//    diaSemanaTexto = 'Sábado';
//} else {
//    diaSemanaTexto = ''
//}

console.log(diaSemanaTexto);
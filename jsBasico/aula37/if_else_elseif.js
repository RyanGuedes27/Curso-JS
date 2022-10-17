const hora = 0;

if (hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!'); 
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {           // <-- Else se abre somente com {}.
    console.log('Essa hora não está no relogio romano.')
}

// If pode ser usado sozinho.
// else if precisa de um if antes, posso criar quantos eu quiser.
// somente um else na checagem.

const tenhoGrana = false;
if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair')
}
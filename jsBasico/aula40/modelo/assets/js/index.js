function myEscopo () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const calculoImc = peso.value / (altura.value * altura.value);
        
        if (peso.value >= 597 ) {
            resultado.innerHTML = 'Peso inválido.'
        } else if (altura.value >= 2.74) {
            resultado.innerHTML = 'Altura inválida'
        }
        else if (calculoImc <= 18.5) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)}(<strong>Abaixo do peso</strong>).`
        } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)} = (<strong>Peso normal</strong>).`
        } else if (calculoImc >= 25 && calculoImc <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)} = (<strong>Sobre peso</strong>).`
        } else if (calculoImc >= 30 && calculoImc <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)} = (<strong>Obesidade grau 1.</strong>)`
        } else if (calculoImc >= 35 && calculoImc <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)} = (<strong>Obesidade grau 2.</strong>)`
        } else if (calculoImc >= 40) {
            resultado.innerHTML = `Seu IMC é ${calculoImc.toFixed(2)} = <strong>(Obesidade grau 3.)</strong>`
        } else {
            resultado.innerHTML = '<strong>Peso ou altura inválido.</strong>'
        }

    }
    form.addEventListener('submit', recebeEventoForm);

};

myEscopo()
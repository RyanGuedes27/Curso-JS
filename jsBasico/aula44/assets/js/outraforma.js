const resultado = document.querySelector('.div');
const data = new Date();
resultado.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});


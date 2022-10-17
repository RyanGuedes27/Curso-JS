const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const numeroSecond = document.getElementById('texto');
const casas = document.getElementById('duasCasas');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu número +2 é ${numero + 2}.</p>`;
texto2.innerHTML += `<p> Raiz quadrada é ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML += `<p> O numero ${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
notANumber.innerHTML += `<p>O numero é NaN? ${Number.isNaN(numero)}</p>`;
paraBaixo.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
paraCima.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
casas.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


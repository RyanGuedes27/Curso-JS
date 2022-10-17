const paragrafo = document.querySelector('.paragrafos');
const allPs = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of allPs) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}


// Nesse exercicio nós selecionamos todos os paragrafos da página HTML com for of, e dentro da estrutura do for of, nos colocamos um style de backuground e um style color que foi aplicado para todos os Ps. Primeiro, nós selecionamos o que queriamos com querySelector.paragrafo e depois selecionamos tudo o que queriamos dentro de paragrafo com paragrafo.querySelectorAll. Usamos o getComputedStyle para pegar todo CSS do documento. 
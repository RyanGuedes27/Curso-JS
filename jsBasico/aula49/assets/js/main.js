const elementos = [
    {tag: 'p', texto: 'Resolvendo'},
    {tag: 'div', texto: 'Um'},
    {tag: 'footer', texto: 'Problema'},
    {tag: 'section', texto: 'Simples'},
];

// HTML

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);


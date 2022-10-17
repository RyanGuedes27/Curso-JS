const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'}, // <---- Valores das TAGS.
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // <-- Selecionando a classe.
const div = document.createElement('div'); // <-- Criamos uma div.

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i]; // <-- Atribuição via desestruturação.
    let tagCriada = document.createElement(tag); // <-- Sempre que o for rodar, ele irá criar a tag com valor que temos.
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada); // <-- Adicionando a tag dentro da div.
    console.log(tag);
}

container.appendChild(div);
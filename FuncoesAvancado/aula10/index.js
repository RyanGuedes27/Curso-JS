// Função construtora -> Objetos.
// Função fabrica -> Objetos.
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou método privadas.
    const ID = 123456;
    const metodoInterno = function() {
        
    };
    // Atributos ou métodos privados.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método.')
    };
}

const p1 = new Pessoa('Ryan', 'Guedes');
p1.metodo();
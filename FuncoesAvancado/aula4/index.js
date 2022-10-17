// ESCOPO LÉXICO

const nome = 'Ryan';

function falaNome() {
    console.log(nome);
};
falaNome();

function usaFalaNome() {
    const nome = 'Ótavio';
    falaNome();
}
usaFalaNome();

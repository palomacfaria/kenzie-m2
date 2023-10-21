const nome = 'Paloma';
const idade = 23;

const texto = `Meu nome é ${nome} e eu tenho ${idade} anos de idade`;
console.log(texto);

const horaAtual = new Date().getHours();
const mensagem = `Olá, ${nome}! ${horaAtual < 12 ? "Bom dia!" : "Boa tarde!"}`;
console.log(mensagem);

const nome1 = 'Zeca';
const idade1 = 30;
const nome2 = 'Maria';
const idade2 = 25;

const tabela = `
    | Nome\t | Idade\t|
    | ${nome1}\t | ${idade1}\t|
    | ${nome2}\t | ${idade2}\t|
`;

console.log(tabela);
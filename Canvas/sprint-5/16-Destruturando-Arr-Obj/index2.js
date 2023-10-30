//*ARRAYS
const frutas = ['maçã', 'banana', 'laranja'];

//Desestruturando
const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1);

//*OBJETOS
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

//Desestruturando
const {nome, idade, cidade} = pessoa;
console.log(cidade);

//*Destructuring com valores padrão
const carro = {
    marca: 'VW',
    modelo: 'Gol G4',
    ano: '2008'
}

const {marca, modelo, ano, completo = false} = carro;
console.log(completo);

//*Destructuring aninhado
const imovel = {
    valor: 150000,
    endereco: {
        rua: "Av. Presidente Vargas",
        bairro: "Antonio Petraglia",
        numero: "2650"
    }
};

const {valor, endereco:{rua, bairro, numero}} = imovel;
console.log(rua);

//*Destructuring com parâmetros de função
function exibirDados({ valor}) {
    console.log(`valor: ${valor}`);
}
 exibirDados(imovel);

//*Destructuring de arrays com rest operator
const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]
const frutas = ['maçã', 'banana', 'laranja'];

const [fruta1, fruta2, fruta3] = frutas;

/* const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

const { nome, idade, cidade } = pessoa; */

const pessoa = {
  nome: 'João',
  idade: 30
};

const { nome, idade, cidade = 'São Paulo' } = pessoa;
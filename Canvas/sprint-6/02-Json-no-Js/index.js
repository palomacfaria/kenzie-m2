//*Transformando dados JSON em JavaScript

const dados = '{"nome": "João", "idade": 25, "cidade": "São Paulo"}';
const objeto = JSON.parse(dados);

console.log(objeto); // { nome: "João", idade: 25, cidade: "São Paulo" }

//*Transformando objetos JavaScript em JSON

const objeto2 = { nome: "João", idade: 25, cidade: "São Paulo" };
const dados2 = JSON.stringify(objeto2);

console.log(dados2); // '{"nome": "João", "idade": 25, "cidade": "São Paulo"}'

//*Erro na conversão de JSON
const dados3 = '{nome: "João", idade: 25, cidade: "São Paulo"}';
const objeto3 = JSON.parse(dados3);

// Uncaught SyntaxError: Expected property name or '}' in JSON at position 1

const objeto4 = {
    nome: "Cláudio",
    idade: undefined,
    funcao: () => {
      console.log("Isso é uma função");
    },
  };
  
  const dados4 = JSON.stringify(objeto4);
  
  console.log(dados4); // '{"nome":"Cláudio"}'

//*Criando e acessando objetos JSON em JavaScript
const pessoa = { nome: "Maria", idade: 31, cidade: "Rio de Janeiro" };
const dados5 = JSON.stringify(pessoa);

const dados6 = '{"nome": "Maria", "idade": 31, "cidade": "Rio de Janeiro"}';
const pessoa2 = JSON.parse(dados)

console.log(pessoa2.nome); // "Maria"
console.log(pessoa2.idade); // 31
console.log(pessoa2.cidade); // "Rio de Janeiro"

//?Também podemos usar colchetes para acessar valores dentro de um JSON convertido em objeto JavaScript
console.log(pessoa['nome']); // "Maria"
console.log(pessoa['idade']); // 31
console.log(pessoa['cidade']); // "Rio de Janeiro"

//*Manipulando objetos JSON em JavaScript
pessoa2.profissao = "programadora";
console.log(pessoa2); // { nome: "Maria", idade: 31, cidade: "Rio de Janeiro", profissao: "programadora" }

delete pessoa2.cidade;
console.log(pessoa2); // { nome: "Maria", idade: 31, profissao: "programadora" }
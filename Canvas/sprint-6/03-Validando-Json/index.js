//Tratamento de erro JSON
//Operador in para verificar se o elemento existe dentro do json convertido em objeto
const dados = '{"nome": "João", "idade": 25}'
const objeto = JSON.parse(dados);

if ("idade" in objeto) {
    console.log(objeto.idade);
} else {
    console.log("Idade não encontrada.");
}

//Verificando se um valor é nulo
const dados2 = '{"nome":"João","idade":null}'
const objeto2 = JSON.parse(dados2);

if (objeto2.idade === null) {
  console.log("Idade não fornecida.");
} else {
  console.log(objeto.idade);
}
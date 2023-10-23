const minhaFuncao = (nome = 'Mundo') => {
    console.log(`Olá, ${nome}!`);
}
minhaFuncao(); //Sem parametro
minhaFuncao('Paloma');

//**********************************************************************
const calcularAreaRetangulo = (largura = 5, altura = 2) => {
    return largura * altura;
}

console.log(calcularAreaRetangulo(2,5));
console.log(calcularAreaRetangulo(5)); //Passando apenas um parametro
console.log(calcularAreaRetangulo()); //Passando sem parametros
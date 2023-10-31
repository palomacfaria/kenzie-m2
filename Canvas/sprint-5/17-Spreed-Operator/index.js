const patrick = {
    name: 'Patrick',
    age: 23
}

/* const samuel = patrick;

samuel.name = 'Samuel',
samuel.age = 24;

console.log(patrick); resultado: { name: 'Samuel', age: 26 }
console.log(samuel);  resultado: { name: 'Samuel', age: 26 }*/

const samuel = {... patrick} //Evoluir dados em outros ao invés de modifica-los

samuel.name = "Samuel";
samuel.age = 26;

console.log(patrick);
console.log(samuel);

/************************JUNTANDO ARRAYS*********************** */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const arraySum = [...array1, ...array2];
console.log(arraySum);

/************************ADICIONAR DADOS AO ARRAY*********************** */
const array = [1, 2, 3, 4];
const newData = 5;

const newArray = [...array, newData];
console.log(newArray);

/************************CONCATENANDO OBJS*********************** */
const usuario = {
    name: 'Samuel',
    age: 26,
}

const endereco = {
    rua: "Quintino",
    cidade: "Timbo",
    estado: "SC"
}

const usuarioCompleto = {...usuario, ...endereco};
console.log(usuarioCompleto);

//Concatenando e alterando dados
const usuarioCompletoAlterado = {
    ...usuario,
    ...endereco,
    age: 20,
    cidade: "Curitiba",
    estado: "PR"
}
console.log(usuarioCompletoAlterado);

/************************ATUALIZAR OBJETOS COM PROPRIEDADES IGUAIS*********************** */
const pessoa = {
    name: 'Gaby',
    age: 29
}

const pessoaAtualizada = {
    name: 'Ana',
    age: 32,
    nascionalidade: 'Brasileira',
    sexo: 'F'
}

const pessoaCompleta = {
    ...pessoa,
    ...pessoaAtualizada
}
console.log(pessoaCompleta);
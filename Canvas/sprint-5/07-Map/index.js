const numbers = [1, 2, 3, 4, 5];

//Multiplicando números por 5 usando o MAP
const newNumbers = numbers.map((elementoAtual, indice, array) => {
    return elementoAtual * 5;
});
console.log(newNumbers); //Cria um novo array
console.log(numbers); //Mantem o array original

//************************************************************* */
//Atualizando idade e adicionando ID
const persons = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40},
    {name: 'Alice', age: 35},
];

const newPersons = persons.map((elementoAtual, indice, array) => {
    const data = {
        name: elementoAtual.name ,
        age: elementoAtual.age - 2, 
        id: indice + 1,
    }

    return data;
});

console.log(newPersons); //Novo Array
console.log(persons); //Array original
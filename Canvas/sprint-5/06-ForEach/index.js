// - O método forEach é usado para executar uma função callback em cada elemento de um array.

// - Ele não retorna um novo array. Em vez dissso, é usado prncipalmente para executar operações ou ações em cada elemento do array.

// - A função callback do forEach pode mofdificar os elementos do array original, mas não é destinada a retornar um valor.

const numbers = [1,2,3,4,5];

const showElement = (element) => {
    console.log(element);
}

for(let i = 0; i < numbers.length; i++){
    //showElement(numbers[i]);
}

//FOREACH
numbers.forEach((element) => {
    //console.log(element);
});

//*************************************************************************************
const persons = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40},
    {name: 'Alice', age: 35},
];

const introducePerson = (person) => {
    console.log(person);
}

for(let i = 0; i < persons.length; i++){
    introducePerson(persons[i]);
}

persons.forEach((person, index, array) => {
    console.log(`${person.name} at index ${index} is ${person.age} years old.`);
});
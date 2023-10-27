const numbers = [3,7,12,13,27,38];

const valorFinal = numbers.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(valorFinal);

const persons = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40},
    {name: 'Alice', age: 35},
];

const idadeTotal = persons.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.age;
}, 0);

console.log(idadeTotal);
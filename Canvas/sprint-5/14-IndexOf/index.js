//* SINTAX
// array.indexOf(elemento, indiceInicio);

/* O primeiro parâmetro é o elemento que estamos procurando no array. O segundo parâmetro é opcional e representa o índice a partir do qual a busca deve ser iniciada.

O método indexOf() retorna o índice do primeiro elemento encontrado no array ou -1 caso o elemento não seja encontrado. */

const numbers = [1, 2, 3, 4, 5];
const indexThree = numbers.indexOf(3);
console.log(indexThree); //2

const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];
const indexAlice = persons.findIndex(person => person.name === 'Alice');
console.log(indexAlice); //3
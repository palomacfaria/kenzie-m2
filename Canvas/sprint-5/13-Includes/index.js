//* SINTAXE
// array.includes(elemento, indiceInicio);

// O primeiro parâmetro é o elemento que estamos verificando se existe no array. O segundo parâmetro é opcional e representa o índice a partir do qual a busca deve ser iniciada.

const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
console.log(includesThree); //true

const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 }
];
const includesAlice = persons.includes({ name: 'Alice', age: 35 });
console.log(includesAlice); //!false
//!Pois cada objeto é criado com uma referência de espaço alocado na memória, e mesmo que tenham as mesmas propriedades, a referência da memória é diferente.
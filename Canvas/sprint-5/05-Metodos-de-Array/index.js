/* forEach(): Executa uma função para cada elemento do array.
map(): Cria um novo array com o resultado da aplicação de uma função em cada elemento.
filter(): Cria um novo array com os elementos que atendem a uma condição específica.
find(): Retorna o primeiro elemento que atende a uma condição específica.
reduce(): Reduz o array a um único valor, aplicando uma função acumuladora em cada elemento. */


let users = ["Samuel", "Júlia", "Camila", "João", "Patrick"];

console.log(users.toString()); //Retorna o Array separado por vírgula
console.log(users.join('/')); //Retorna o Array separado pelo identificador passado

console.log(users);

/*********************************************************************************** */
//MAP
const employeeBonus = [12, 14, 16, 23];

const currentEmployeeBonus = employeeBonus.map((elemento) => {  
    return elemento * 2; //Multiplicando o array sem altera-lo
})
console.log(currentEmployeeBonus);
console.log(employeeBonus);

/*********************************************************************************** */
//FILTER
const employeeBonus2 = [30, 31, 32, 999];
const valuesGreaterThanThirty = employeeBonus2.filter((elemento) => {
    return elemento > 50; //Retornando elementos maiores que 50
});
console.log(valuesGreaterThanThirty);

/*********************************************************************************** */
//REDUCE
const employeeBonus3 = [30, 31, 32, 999, 23, 10, 5, 9, 30, 20, 55];

const bonusSum = employeeBonus3.reduce((previousValue, currentValue) => {
    return currentValue + previousValue; //Somando valor atual + valor anterior
}, 5); //Definindo o valor inicial
console.log(employeeBonus3);
console.log(bonusSum);

/*********************************************************************************** */
//SOME
const employeeBonus4 = [30, 31, 32, 999, 23, 10, 5, 9, 30, 20, 55];

const even = (elemento) => elemento % 2 === 0;
console.log(employeeBonus4.some(even)); //Existe algum elemento par dentro do array? R: Boolean

/*********************************************************************************** */
//FIND
const employeeBonus5 = [30, 31, 32, 999, 23, 10, 5, 9, 30, 20, 55];

const found = employeeBonus5.find(elemento => elemento > 31); //Buscando o primeiro número maior que 31
console.log(found);

/* Métodos de adição/remoção
Os métodos de adição/remoção são usados para adicionar ou remover elementos de um array. Alguns exemplos são:

push(): Adiciona um ou mais elementos no final do array.
pop(): Remove o último elemento do array.
shift(): Remove o primeiro elemento do array.
unshift(): Adiciona um ou mais elementos no início do array.
splice(): Adiciona ou remove elementos em qualquer posição do array. */

const array1 = [1, 2, 3, 4, 5];

// push()
const array2 = [1, 2, 3];
array2.push(4, 5);
console.log(array2);
// Saída: [1, 2, 3, 4, 5]

// pop()
const array3 = [1, 2, 3, 4, 5];
array3.pop();
console.log(array3);
// Saída: [1, 2, 3, 4]

// shift()
const array4 = [1, 2, 3, 4, 5];
array4.shift();
console.log(array4);
// Saída: [2, 3, 4, 5]

// unshift()
const array5 = [2, 3, 4, 5];
array5.unshift(1);
console.log(array5);
// Saída: [1, 2, 3, 4, 5]

// splice()
const array6 = [1, 2, 3, 4, 5];
array6.splice(2, 0, 6);
console.log(array6);
// Saída: [1, 2, 6, 3, 4, 5]

/* Métodos de pesquisa/manipulação
Os métodos de pesquisa/manipulação são usados para pesquisar ou manipular o conteúdo de um array. Alguns exemplos são:

indexOf(): Retorna a posição do primeiro elemento que corresponde a um valor especificado.
includes(): Verifica se o array contém um determinado valor.
sort(): Ordena os elementos do array de acordo com uma função de comparação.
reverse(): Inverte a ordem dos elementos do array.
slice(): Retorna uma parte do array, sem modificar o array original. */

// indexOf()
const index = array1.indexOf(3);
console.log(index);
// Saída: 2

// includes()
const hasThree = array1.includes(3);
console.log(hasThree);
// Saída: true

// sort()
const array7 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array7.sort((a, b) => a - b);
console.log(array7);
// Saída: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// reverse()
const array8 = [1, 2, 3, 4, 5];
array8.reverse();
console.log(array8);
// Saída: [5, 4, 3, 2, 1]

// slice()
const slicedArray = array1.slice(1, 4);
console.log(slicedArray);
// Saída: [2, 3, 4]
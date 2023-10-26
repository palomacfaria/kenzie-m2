//SINTAXE: arr.filter((elemento, indice, array) ={});

const numbers = [1,2,3,4,5,6,7,8,9,10];

const products = [
    {name: 'Laptop', price: 1000, category: 'Eletronics'},
    {name: 'Shirt', price: 25, category: 'Clothing'},
    {name: 'Headphones', price: 150, category: 'Eletronics'},
    {name: 'Jeans', price: 50, category: 'Clothing'},
    {name: 'Tablet', price: 500, category: 'Eletronics'},
];

const scores = [85,92,78,94,88,90,76,82];

const words = ['apple', 'banana', 'grape', 'strawberry', 'blueberry'];

//Filtrando apenas os números pares
const evenNumbers = numbers.filter((elemento, indice, array) => {
    return elemento % 2 === 0;
});

console.log(evenNumbers);

//Filtrar apenas pelos produtos eletronicos
const eletronics = products.filter((elemento, indice, array) => {
    return elemento.category === 'Eletronics';
});

console.log(eletronics);
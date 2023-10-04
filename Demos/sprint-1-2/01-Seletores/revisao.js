//Revisão M1
const person = {
    name: "Chrystian",
    module: "M2"
}

person.novaChave = "Novo Valor"
console.log(person);

const persons = [
    {name: "Chrystian", module: "M2"},
    {name: "Lorena", module: "M1"},
    {name: "Vilson", module: "M3"},
    {name: "Rafael", module: "M4"},
];
//Acessando todos os objetos do array
console.log(persons);
//Acessando o primeiro item
console.log(persons[0]);
const firstPerson = persons[0]
//Acessando o name do primeiro item do array
console.log(firstPerson.name);
//Adicionando um novo objeto ao array
persons.push({name: "Lucira", module: "M5"});
console.log(persons);

for(let i = 0; i < persons.length; i++){
    const currentPerson = persons[i];
    currentPerson.novaChave = "novo valor";
}
console.log(persons);
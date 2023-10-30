//*OBJETO
const person = {
  name: "Julia",
  age: 24,
  address: {
    city: 'Fortaleza',
    state: 'CE',
  },
};

/* //const name = person.name;
const { name } = person;
//const city = person.address.city;
const {city} = person.address;
//const state = person.address.state;
const {state} = person.address;

console.log(name);
console.log(city);
console.log(state); */

const {
  name,
  address: {city, state},
} = person;

function listPeople({name, age, address: {city, state}}){
  /* return `Meu nome é ${person.name}, tenho ${person.age} anos e resido na cidade de ${person.address.city}, no estado de ${person.address.state}`; */

  return `Meu nome é ${name}, tenho ${age} anos e resido na cidade de ${city}, no estado de ${state}.`;
}
console.log(listPeople(person));

//*ARRAY
const ranking = ["Julia", "Samuel", "Larissa", "Carlos", "Rafael", "Emilly", "Emanuela", "João"];

// const firstPlace = ranking[0];
// const secondPlace = ranking[1];

//Deixar um espaço vazio é a forma de ignorar um elemento
const [firstPlace, , thirdPlace, ...everyone] = ranking;

console.log(`
  Primeiro Lugar: ${firstPlace}
  Terceiro Lugar: ${thirdPlace}
  Outros Participantes: ${everyone}`);
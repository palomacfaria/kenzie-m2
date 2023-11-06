const users = [
  {
    nome: "Carla",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Pedro",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Sara",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Diego",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Paulo",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Ana",
    idade: 27,
    altura:1.73,
    estuda: true
  },
  {
    nome: "Cintia",
    idade: 27,
    altura:1.73,
    estuda: true
  }
]

//STRINGFY -> Converte objeto JS para objeto JSON
const arrayJson = JSON.stringify(users);
console.log(arrayJson);
console.log(typeof arrayJson);

//PARSE -> Converte o JSON para objeto JS
const convertedJson = JSON.parse(arrayJson);
console.log(convertedJson);
console.log(typeof convertedJson);
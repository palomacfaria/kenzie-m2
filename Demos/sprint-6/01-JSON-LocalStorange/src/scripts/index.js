//*JSON
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

//STRINGFY -> Converte objeto JS para uma string JSON
const arrayJson = JSON.stringify(users);
console.log(arrayJson);
console.log(typeof arrayJson); //string

//PARSE -> Converte o JSON para objeto JS
const convertedJson = JSON.parse(arrayJson);
console.log(convertedJson);
console.log(typeof convertedJson); //object

//*LOCALSTORANGE
//Armazenando informação
localStorage.setItem("darkMode", true); //Se eu passar uma informação que não seja uma string, ele será convertido para string.

//Buscando uma informação
const darkMode = localStorage.getItem("darkMode");
console.log(darkMode);
console.log(typeof darkMode);

//Enviando um objeto para o LocalStorange
const objeto = JSON.stringify({nome: "Paloma", altura: 1.62});
localStorage.setItem("Objeto", objeto);

const objetoConvertio = localStorage.getItem("Objeto");

//Transformando em Obj JS
const objetoConvertidoJS = JSON.parse(objetoConvertio)
console.log(objetoConvertidoJS);

const texto = document.querySelector("h1");
texto.innerText = objetoConvertidoJS.nome;
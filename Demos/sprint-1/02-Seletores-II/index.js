function slectorExemplo(){
//Seletor individual
//const main = document.querySelector("main");

/* const main = document.getElementsByTagName('main');
console.log(main[0]); */

//************************************************
//Selecionar pelo nome da TAG
//const headingOne = document.getElementsByTagName("h1");
//const headingOne = document.querySelector("h1");

//************************************************
//Slecionoar pelo ID
//const headingOne = document.querySelector("#h1__id");
//const headingOne = document.getElementById("h1__id");

//************************************************
//Selecionar pela CLASSE
//const headingOne = document.querySelector(".realeses-title");
const headingOne = document.getElementsByClassName("realeses-title");
console.log(headingOne);
headingOne[0].innerText = "Lançamentos alterados pelo DOM";
}
//slectorExemplo();

//Criando um novo H2
const h2 = document.createElement("h2");
h2.innerHTML = "Este é um texto h2";

//Buscando uma referência
const main = document.querySelector("main");
main.appendChild(h2);

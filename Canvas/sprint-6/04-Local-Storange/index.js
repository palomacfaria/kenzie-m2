//*Verificando se o navegador possui suporte para o local storange

if(typeof(Storage) !== "undefined"){
    console.log("Possui suporte.");
}else{
    console.log("Não possui suporte");
}


const number = 25;
const array = [1, 3, true, "Javascript"];
const string = "LocalStorange";

//Armazenar dados
localStorage.setItem("Number", number);
localStorage.setItem("Random Array", array);
localStorage.setItem("Ramdon String", string);

//Recuperar dados
const valor = localStorage.getItem("Number");
console.log(valor);
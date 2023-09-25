//Acessando o título 
const titulo = document.body.children[0];
console.log(titulo);

//Reatribuindo o título
titulo.innerText = "Um novo título 2";

//querySelector -> Seleciona a primeira popriedade passada que encontrar 
const paragrafo = document.querySelector("p");
//console.log(paragrafo);
paragrafo.innerText = "Novo texto do paragrafo 1";
paragrafo.style.backgroundColor = "black";
paragrafo.style.color = "white";
paragrafo.style.border = "5px solid red";

//querySelectorAll -> Seleciona todos
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[0]);

for(let i = 1; i < paragrafos.length; i++){
    paragrafos[i].style.border = "5px solid blue";
}
/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ingredients = document.getElementById('ingredients');
console.log(ingredients);

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const elementoH1 = document.getElementsByTagName('h1');
console.log(elementoH1);

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const recipe = document.getElementsByClassName('recipe');
console.log(recipe);

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

let subtitles = document.getElementsByTagName('h2');
for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].style.color = "blue";
  }


/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

let inputs = document.querySelectorAll('input');
for(let i = 0; i < inputs.length; i++){
    inputs[i].style.borderColor = "red";
}
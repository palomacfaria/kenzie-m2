/* const div_1 = document.getElementById('box_1');

console.log(div_1);

div_1.style.backgroundColor = "black"; */

let boxs = document.getElementsByTagName("div");
console.log(boxs[0]);

boxs = document.getElementsByClassName('box');
console.log(boxs);

//Seleciona apenas um elemento
let div_1 = document.querySelector('.box');
console.log(div_1);

//Seleciona todos os elementos
let todasDivsBox = document.querySelectorAll('.box');
for (let i = 0; i < todasDivsBox.length; i++) {
    todasDivsBox[i].style.backgroundColor = "red";
}
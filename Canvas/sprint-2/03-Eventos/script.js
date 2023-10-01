const button = document.querySelector('button');
const p = document.querySelector('p');

let contador = 0;
button.addEventListener('click', function(){
    contador++;
    p.innerText = contador;
});
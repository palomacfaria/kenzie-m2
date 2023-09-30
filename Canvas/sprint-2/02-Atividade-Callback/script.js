function somar(num1, num2, callback) {
    let resultado =  num1 + num2;
    callback(resultado);
}

function imprimirResultado(resultado) {
    console.log(`O resultado da soma é:  ${resultado}`);
}

somar(2, 3, imprimirResultado);
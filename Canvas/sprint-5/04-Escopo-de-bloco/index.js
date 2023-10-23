//let name = 'Rafael' //Global

function mostraNumeros (){
    for(let i = 0; i <= 5; i++){
        console.log(i);
    }
    //Variável não pode ser acessada fora do escopo for()
    //!console.log(i);
}
mostraNumeros();

//*******************************************************************
const maximo = 10;

function mostraNumeros2(maximo){
    maximo = 5;

    for(let i = 0; i<= maximo; i++){
        console.log(i);
    }
    console.log(maximo) //Dentro da função
}
mostraNumeros2(maximo);

console.log(maximo) //Fora da função
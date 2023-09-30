/* O que é um Callback?
Um callback é uma função passada como argumento para outra função. O objetivo do callback é executar uma ação dentro da função externa, com a finalidade de manipular ou completar alguma rotina com os dados presentes dentro da função externa, ou executar alguma lógica própria dentro do escopo da função externa. */

const letras = ["a", "b", "c", "d", "e"];

function mostraItens (array, callback){
    for(let i = 0; i < array.length; i++){
        const letraAtual = array[i];

        callback(letraAtual);
    }
}
function fazConsoleLog(item){
    console.log(item);
}
mostraItens(letras, fazConsoleLog);

//*************************************************************
function imprimeMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

imprimeMensagem("Olá, mundo!", function() {
    console.log("Callback executado!");
});
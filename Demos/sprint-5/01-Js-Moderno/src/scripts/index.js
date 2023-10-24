import {list} from "./database.js"
import {printaNumero} from "./functions.js"

//*IMUTABILIDADE
const usuario = {
    nome: "Fernando",
    idade: 32,
}
//!Não é possível reatribuir uma const
//usuario = 12;

//*TEMPLATE LITERALS, TEMPLATE STRING, INTERPOLAÇÃO DE STRINGS
/* const texto = usuario.nome + " tem " + usuario.idade + " anos";
console.log(texto);
 */
const texto = `${usuario.nome} tem ${usuario.idade} anos.`;
console.log(texto);

//*FUNCTION & ARROW FUNCTION
function nomeDaFuncao(name){
    console.log(name);
}
nomeDaFuncao('Paloma');

/* const nomeDaFuncaoArrow = (callback) => {
    callback();
}

const printaNome = () => {
    console.log("Alessandra");
}
nomeDaFuncaoArrow(printaNome); */
const nomeDaFuncaoArrow = (name) => `Instrutora ${name}`;

console.log(nomeDaFuncaoArrow("Alessandra"));

//?HOISTING / IÇAMENTO
//Quando declaramos a função com a function convencional, eu posso chama-la antes de ser declarada. Já com a ARROW FUNCTION não é possível acessa-la antes da inicialização da função.

//*MÓDULOS
printaNumero(list);
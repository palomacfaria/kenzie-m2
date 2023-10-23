const printaNumero = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const outraFuncao = () =>{

}

//* Só é possivel exportar 1 vez usando o export default por arquivo JS
/* export default printaNumero; */

export {printaNumero, outraFuncao};
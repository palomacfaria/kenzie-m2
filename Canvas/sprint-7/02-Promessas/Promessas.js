function payment(value){
    if(value >= 25){
        return true;
    }
    return false;
}

function hamburger(){
    return "Hamburger pronto!";
}

function fastFood(value){
    const res = new Promise ((resolve, rejected) => {
        if(payment(value)){
            resolve(hamburger());
        }else{
            rejected("Pagamento insuficiente");
        }
    });
    return res;
}

console.log(fastFood(60));
//console.log(fastFood(10));


setTimeout(() => {
    console.log("Olá Kenzie, atrasado 03 segundos");
}, 3000);
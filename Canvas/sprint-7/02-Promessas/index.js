function pay(value){
    if(value >= 25){
        return true;
    }
    return false;
}

function hamburger(){
    return "hamburguer pronto";
}

function fastFood(payment){
    const res = new Promise((resolve, rejected) => {
        if(pay(payment)){
            setTimeout(() => {
                resolve(hamburger());
            }, 3000);
        }else{
            setTimeout(() => {
                rejected("Pagamento insuficiente");
            }, 3000);
        }
    });
    return res;
}

fastFood(60).then((res) => console.log(res));
fastFood(10).then((res) => console.log(res)).catch((err) => console.log(err));

/* console.log(fastFood(60));
console.log(fastFood(10)); */
function now(){
    console.log("now");
    return 21;
}

function later(){
    answer = answer * 2;
    console.log("Significado da vida", answer);
}

let answer = now();

setTimeout(later, 1000);
//Function Tradicional
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(5, 9));

//Arrow Function
const sumArrow = (number1, number2) => {
    return number1 + number2
}

console.log(sumArrow(2,3));

//Reduzindo a Arrow Function
const sumArrow2 = (number1, number2) => number1 + number2;
console.log(sumArrow2(7,7));
const inputs = document.querySelectorAll("input");
console.log(inputs);
/* const array = [...inputs];

console.log(inputs);
console.log(array); */

const data = [...inputs];
console.log(data);

const login = data.map((element) => element.value);
const email = data.find((element) => element.name === "email");

console.log(login);
console.log(email);
import { clients } from "./database.js";

const createCard = (user) => {
  const { name, email, age, phone } = user;

  const liCard = document.createElement("li");
  const h2Name = document.createElement("h2");
  const pEmail = document.createElement("p");
  const pIdade = document.createElement("p");
  const pTel = document.createElement("p");
  const btnDelete = document.createElement("button");

  liCard.classList.add("clients__card");

  h2Name.innerText = name;
  pEmail.innerText = `Email: ${email}`;
  pIdade.innerText = `Idade: ${age}`;
  pTel.innerText = `Telefone: ${phone}`;
  btnDelete.innerText = "X";

  btnDelete.addEventListener("click", (event) => {
    const index = clients.indexOf(user);
    clients.splice(index, 1);

    // event.target.parentNode.remove();

    renderCards(clients);
  });

  liCard.append(h2Name, pEmail, pIdade, pTel, btnDelete);

  return liCard;
};

// const usuario = {
//   id: 3,
//   name: "Amanda",
//   email: "amanda@mail.com",
//   age: 43,
//   phone: "999666555",
// };

// const card = createCard(usuario);

// console.log(card);

const renderCards = (clientsArray) => {
  const ulClients = document.querySelector(".clients__list");

  ulClients.innerHTML = "";

  //   for (let i = 0; i < clientsArray.length; i++) {
  //     const currentClient = clientsArray[i];

  //     const card = createCard(currentClient);

  //     ulClients.appendChild(card);
  //   }

  // forEach -> para cada - executa uma callback em cada elemento do meu array

  clientsArray.forEach((currentClient) => {
    const card = createCard(currentClient);
    ulClients.appendChild(card);
  });
};

const listAverage = (clientsArray) => {
  // map -> mapear o array - executa uma callback em cada elemento e retorna um novo array com a execução

  const averageList = clientsArray.map((currentClient) => currentClient.age);
  //   const averageList = clientsArray.map((currentClient) => {
  //     return currentClient.age
  //   });

  console.log(averageList);
};

const filterByAge = (clientsArray, overAge) => {
  // filter -> filtrar - executa uma callbak com uma validação de dados,retornando um novo array baseado nos items que passou na condicional

  // if (currentClient.age <= 30) {
  //   return true;
  // } else {
  //   return false;
  // }
  const clientsByAge = clientsArray.filter((currentClient) => {
    if (overAge) {
      return currentClient.age > 30;
    } else {
      return currentClient.age <= 30;
    }
  });

  return clientsByAge;
};

const addFilterEvents = () => {
  const searchInput = document.querySelector(".search__input");
  const bellowBtn = document.querySelector("#filterBellow30");
  const overBtn = document.querySelector("#filterOver30");

  searchInput.addEventListener("keyup", (event) => {
    const filtered = clients.filter((currentClient) => {
      return currentClient.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    renderCards(filtered);
  });

  bellowBtn.addEventListener("click", () => {
    const filtered = filterByAge(clients);
    renderCards(filtered);
  });

  overBtn.addEventListener("click", () => {
    const filtered = filterByAge(clients, true);
    renderCards(filtered);
  });
};

const allAge = (clientsArray) => {
  // reduce -> reduzir - reduz o nosso array em um único valor resultante de uma callback

  const result = clientsArray.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0);

  console.log(result / clientsArray.length);
};

// includes -> inclui algo - percorre todo o array/string vereificando se existe exatamente o argumento pesquisado.

const arrayTeste = [15, 24, 17, 95, 36, 88, 17, 15];
const arrayNome = ["fernando", "andy", "ale", "chrys"];
// console.log(arrayTeste.includes(88));
// console.log(arrayNome.includes("rafa"));

const frase = "O rato roeu a roupa do rei de Roma.";
// console.log(frase.toLowerCase().includes("roma"));

// indexOf -> índice de algo - percorre o array/string e torna a posição em que foi encontrado o argumento passado

// console.log(arrayTeste.indexOf(24, 3));
// console.log(frase.indexOf(" ", 2));

// splice -> emendar - remove ou não e adiciona ou não um ou mais elementos a partir do índice indicado alterando o array original

// const removidos = arrayNome.splice(2, 2, "rafa");
// console.log(arrayNome);
// console.log(removidos);

renderCards(clients);
// listAverage(clients);
// const filteredArray = filterByAge(clients);

// renderCards(filteredArray);
// allAge(filteredArray);
addFilterEvents();
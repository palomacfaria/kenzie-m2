import { clients } from "./database.js";

const createCard = (user) => {
    //Criando elementos
    const liCard = document.createElement('li');
    const h2Name = document.createElement('h2');
    const pEmail = document.createElement('p');
    const pIdade = document.createElement('p');
    const pTel = document.createElement('p');

    //Adicionando classe
    liCard.classList.add('clients__card');

    //Inserindo valores
    h2Name.innerText = user.name;
    pEmail.innerText = `Email: ${user.email}`;
    pIdade.innerText = `Idade: ${user.age}`;
    pTel.innerText = `Telefone: ${user.phone}`;

    //Adicionando elementos a estrutura
    liCard.append(h2Name, pEmail, pIdade, pTel);

    return liCard;
}

const renderCards = (clientsArray) => {
    const ulClients = document.querySelector('.clients__list');

    ulClients.innerHTML = '';

    /* for(let i = 0; i < clientsArray.length; i++){
        const currentClient = clientsArray[i];

        const card = createCard(currentClient);

        ulClients.appendChild(card);
    } */

    //* forEach -> Para cada elemento do array executa uma função callback.

    clientsArray.forEach((currentClient)=>{
        const card = createCard(currentClient);
        ulClients.appendChild(card);
    });
}

renderCards(clients);
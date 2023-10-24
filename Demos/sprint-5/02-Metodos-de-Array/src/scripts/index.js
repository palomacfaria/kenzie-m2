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

//*MAP -> Mapear array - executa uma callback em cada elemento e retorna um novo array com a execução.

const listAverage = (clientsArray) => {

    //const averageList = clientsArray.map((currentClient) => currentClient.age);

    const averageList = clientsArray.map((currentClient) => {
        return currentClient.age;
    });

    console.log(averageList);
}

//*FILTER -> Filtrar - executa uma callback com uma validação de dados, retornando um novo array baseado nos itens que passou na condicional.
const filterByAge = (clientsArray) => {
    const clientsByAge = clientsArray.filter((currentClient) => {
        /* if(currentClient.age <= 30){
            return true;
        }else{
            return false;
        } */
        return (currentClient.age > 30)
    
    });
    console.log(clientsByAge);
}

//*REDUCE -> Reduzir - Reduz o nosso array e um único valor resultante de uma callback.
const allAge = (clientsArray) => {
    const result = clientsArray.reduce((acumulador, currentValue) => {
        return acumulador + currentValue.age;
    }, 0);

    console.log(result / clientsArray.length);
}

renderCards(clients);
listAverage(clients);
filterByAge(clients);
allAge(clients);
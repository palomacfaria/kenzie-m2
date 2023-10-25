import { clients } from "./database.js";

const createCard = (user) => {
    //Criando elementos
    const liCard = document.createElement('li');
    const h2Name = document.createElement('h2');
    const pEmail = document.createElement('p');
    const pIdade = document.createElement('p');
    const pTel = document.createElement('p');
    const btnDelete = document.createElement('button');

    //Adicionando classe
    liCard.classList.add('clients__card');

    //Inserindo valores
    h2Name.innerText = user.name;
    pEmail.innerText = `Email: ${user.email}`;
    pIdade.innerText = `Idade: ${user.age}`;
    pTel.innerText = `Telefone: ${user.phone}`;
    btnDelete.innerText = 'X';

    //Adicionando elementos a estrutura
    liCard.append(h2Name, pEmail, pIdade, pTel, btnDelete);

    btnDelete.addEventListener('click', (event)=>{
        //Achar a posição do objeto dentro do array
        const index = clients.indexOf(user);
        console.log(index);

        //Remove o elemento dentro do array
        clients.splice(index, 1);

        //?Também é possível remover assim:
        //event.target.parentNode.remove();

        //Renderiza novamente
        renderCards(clients);
    });

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

//*INCLUDES -> Inclui algo - Percorre todo o array / string verificando se existe exatamente o argumento pesquisado.
const arrayTeste = [15, 24, 17, 95, 36, 88, 17, 15];
const arrayNome = ["Fernando", "Andy", "Ale", "Chrys"]
console.log(arrayTeste.includes(88)); //True

const frase = "O rato roeu a roupa do rei de Roma.";
console.log(frase.includes('roeu')); //True
console.log(frase.includes('roma')); //False
console.log(arrayNome.includes('Ale')); //True

//*INDEXOF -> Indice de algo - Percorre o array / string e retorna a posição em que foi encontrado o argumento passado.
console.log(arrayTeste.indexOf(24)); //Indice: 1
console.log(arrayTeste.indexOf(17, 3)); //Qual elemento que eu quero pesquisar / a partir do indice que eu passar.
console.log(arrayTeste.indexOf(99)); // -1 pois não existe


//*SPLICE -> Emendar - Remove ou não e adiciona ou não um ou mais elementos a partir do indice indicado alterando o array inicial.
arrayNome.splice(0, 1, 'Rafa'); //A partir do indice 0 remova 1 elemento e coloque 'Rafa' no lugar
console.log(arrayNome);

arrayNome.splice(0, 0, 'Maria'); //A partir do indice 0 não remova nada e e coloque o elemento 'Maria'.
console.log(arrayNome);

const removidos = arrayNome.splice(2, 2, 'João');
console.log(arrayNome);
console.log(removidos);

renderCards(clients);
/* listAverage(clients);
filterByAge(clients);
allAge(clients); */
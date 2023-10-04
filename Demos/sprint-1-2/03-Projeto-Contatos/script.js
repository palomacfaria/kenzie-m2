const contactsList = [
    { name: "joão", contact: "joao@mail.com", type: "email" },
    { name: "pedro", contact: "999999999", type: "phone" },
    { name: "joana", contact: "888888888", type: "phone" },
    { name: "raissa", contact: "raissa@mail.com", type: "email" },
    { name: "maicon", contact: "maicon@mail.com", type: "email" },
    { name: "sandra", contact: "777777777", type: "phone" },
    { name: "lívia", contact: "livia@mail.com", type: "email" },
    { name: "caio", contact: "999999999", type: "phone" },
    { name: "larissa", contact: "555555555", type: "phone" },
    { name: "sávio", contact: "savio@mail.com", type: "email" },
];

function createCard(object) {
    //Criando elementos
    const liCard = document.createElement("li");
    const divContainer = document.createElement("div");
    const pName = document.createElement("p");
    const pContact = document.createElement("p");
    const span = document.createElement("span");
    const btnRemove = document.createElement("button");
  
    //Atribuindo valor
    pName.innerText = object.name;
    pContact.innerText = object.contact;
    btnRemove.innerText = "X";
  
    //Adicionando classes de estilização
    divContainer.classList.add("card__container");
    btnRemove.classList.add("card__remove-button");
    liCard.classList.add("card");
  
    if (object.type === "email") {
      span.classList.add("email");
    } else {
      span.classList.add("phone");
    }

    //Removendo elemento ao clicar
    btnRemove.addEventListener("click", function(){
        const index = contactsList.indexOf(object);
        //console.log(index);
        contactsList.splice(index, 1);

        renderContacts(contactsList);
    });

    //Criando estrutura
    divContainer.append(span, pName, pContact);
    liCard.append(divContainer, btnRemove);

    return liCard;
}

//Renderizando elementos
function renderContacts(array) {
    const list = document.querySelector("ul");
  
    list.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
      const card = createCard(array[i]);
  
      list.appendChild(card);
    }
  }

//Criando novo elemento 
function creatNewContact(){
    const form = document.querySelector(".create__form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const inputName = document.querySelector("#input-name");
        const inputContact = document.querySelector("#input-contact");
        const selectType = document.querySelector("#select-type");

        const newContact = {
            name: inputName.value.toLowerCase(),
            contact: inputContact.value.toLowerCase(),
            type: selectType.value,
        }
        console.log(newContact)
        contactsList.push(newContact);
        renderContacts(contactsList);
    });
}

//Buscando um contato
function searchContact(){
    const form = document.querySelector('.search__form');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const searchInput = document.querySelector(".search__input");

        const filterAddContacts = [];

        for(let i = 0; i < contactsList.length; i++){
            const currentContact = contactsList[i];
            if(currentContact.name === searchInput.value){
                filterAddContacts.push(currentContact);
            }
        }

        renderContacts(filterAddContacts);
    });
}

renderContacts(contactsList);
creatNewContact();
searchContact();
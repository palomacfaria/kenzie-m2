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

function createCard(object){
    const liCard = document.createElement("li");
    const divContainer = document.createElement("div");
    const pName = document.createElement("p");
    const pContact = document.createElement("p");
    const span = document.createElement("span");
    const btnRemove = document.createElement("button");

    pName.innerText = object.name;
    pContact.innerText = object.contact;
    btnRemove.innerText = "X";

    divContainer.classList.add("card__container");
    btnRemove.classList.add("card__remove-button");
    liCard.classList.add("card");

    if(object.type === "email"){
        span.classList.add("email");
    }else{
        span.classList.add("phone");
    }

    divContainer.append(span, pName, pContact);
    liCard.append(divContainer, btnRemove);

    return liCard;
}

function renderContacts(array){
    const list = document.querySelector("ul");

    for(let i = 0; i < array.length; i++){
        const card = createCard(array[i]);

        list.appendChild(card);
    }
}

function creatNewContact(){
    const form = document.querySelector(".create__form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const inputName = document.querySelector("#input-name");
        const inputContact = document.querySelector("#input-contact");
        const selectType = document.querySelector("#slect-type");

        const newContact = {
            name: inputName.value,
            contact: inputContact.value,
            type: selectType.value,
        }
        contactsList.push(newContact);
        renderContacts(contactsList);
    });
}

renderContacts(contactsList);
creatNewContact();
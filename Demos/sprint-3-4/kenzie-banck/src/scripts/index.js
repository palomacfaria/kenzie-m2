function handleUserModal() {
  const userCard = document.querySelector(".user__container");

  const modalControler = document.querySelector("#userModalController");

  userCard.addEventListener("click", function () {
    modalControler.showModal();
  });
}

function closeUserModal() {
  const userButtonClose = document.querySelector("#closeUserModal");

  const modalControler = document.querySelector("#userModalController");

  userButtonClose.addEventListener("click", function () {
    modalControler.close();
  });
}

handleUserModal();
closeUserModal();

function handleServicesModal() {
  const servicesItems = document.querySelectorAll(".services__item");

  const modalController = document.querySelector("#servicesModalController");

  for (let i = 0; i < servicesItems.length; i++) {
    const currentItem = servicesItems[i];
    currentItem.addEventListener("click", function (event) {
      //Pegando o texto do primeiro filho do card clicado
      const text = event.target.children[0].innerText;
      console.log(text);

      //Limpa o modal
      modalController.innerHTML = "";

      //Cria o modal
      const modalContent = createModalContent(text);

      //Coloca o elemento dentro do modal
      modalController.appendChild(modalContent);

      //Abre o modal
      modalController.showModal();

      //Chamando a função que possui o botão fechar
      closeServicesModal();
    });
  }
}

function createModalContent(textName) {
  const divContainer = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const closeModalButton = document.createElement("button");

  title.innerText = textName;
  text.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rem veniam harum laudantium in beatae perferendis, quam pariatur atque! Dolorem quos cum ea eos reprehenderit recusandae veritatis omnis nesciunt nobis.";
  closeModalButton.innerText = "X";

  divContainer.classList.add("modal__container");
  title.classList.add("services-modal__title");
  closeModalButton.id = "closeServicesModal";

  divContainer.append(closeModalButton, title, text);

  return divContainer;
}

function closeServicesModal() {
  const modalController = document.querySelector("#servicesModalController");
  const closeModalButton = document.querySelector("#closeServicesModal");

  closeModalButton.addEventListener("click", function () {
    modalController.close();
  });
}

handleServicesModal();

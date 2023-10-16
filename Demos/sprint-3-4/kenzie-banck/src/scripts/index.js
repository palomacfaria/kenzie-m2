function handleUserModal() {
  const userCard = document.querySelector(".user__container");
  const modalController = document.querySelector("#userModalController");

  //   console.log(userCard);
  //   console.log(modalController);

  userCard.addEventListener("click", function () {
    modalController.showModal();
  });
}

function closeUserModal() {
  const userButtonClose = document.querySelector("#closeUserModal");
  const modalController = document.querySelector("#userModalController");

  userButtonClose.addEventListener("click", function () {
    modalController.close();
  });
}

handleUserModal();
closeUserModal();

function handleServicesModal() {
  const servicesItems = document.querySelectorAll(".services__item");

  const modalController = document.querySelector("#servicesModalController");

  for (let i = 0; i < servicesItems.length; i++) {
    const currentItem = servicesItems[i];

    // console.log(currentItem);

    currentItem.addEventListener("click", function (event) {
      //   console.dir(event.target);

      const text = event.target.children[0].innerText;

      //   console.log(text);

      modalController.innerHTML = "";

      const modalContent = createModalContent(text);

      modalController.appendChild(modalContent);

      modalController.showModal();

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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae beatae, laboriosam accusantium doloribus a nesciunt eos exercitationem blanditiis recusandae tenetur minima nobis rem assumenda poro minus, asperiores, deserunt fugit!";
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

  closeModalButton.addEventListener("click", () => {
    modalController.close();
  });
}

handleServicesModal();

// function nomeDaFuncao(parametro) {}

// const nomeDaFuncaoArrow = (parametros) => {};

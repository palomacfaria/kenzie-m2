import { products } from "./database.js";

// const cartProducts = [];

const localCart = localStorage.getItem("@kenzieShop:cart");

const convertedCart = JSON.parse(localCart);

const cartProducts = convertedCart || [];

// const cartProducts = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || [];

const calculateTotal = (array) => {
  const pTotal = document.querySelector(".cart__total");

  const totalValue = array.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  pTotal.innerText = `Total: R$ ${totalValue.toFixed(2)}`;
};

const createCard = (product) => {
  const liCard = document.createElement("li");
  const divImage = document.createElement("div");
  const image = document.createElement("img");
  const h2Title = document.createElement("h2");
  const pPrice = document.createElement("p");
  const btnAddCart = document.createElement("button");

  liCard.classList.add("products__card");
  divImage.classList.add("card__image");
  h2Title.classList.add("card__title");
  pPrice.classList.add("card__price");
  btnAddCart.classList.add("card__button");

  image.src = product.image;
  image.alt = `Imagem de ${product.name}`;
  h2Title.innerText = product.name;
  pPrice.innerText = `R$ ${product.price.toFixed(2)}`;
  btnAddCart.innerText = "Adicionar ao carrinho";

  btnAddCart.addEventListener("click", () => {
    cartProducts.push(product);

    const cartJson = JSON.stringify(cartProducts);

    localStorage.setItem("@kenzieShop:cart", cartJson);
    renderCartCards(cartProducts);
  });

  divImage.appendChild(image);
  liCard.append(divImage, h2Title, pPrice, btnAddCart);

  return liCard;
};

const createCartCard = (product) => {
  const liCard = document.createElement("li");
  const divImage = document.createElement("div");
  const image = document.createElement("img");
  const divTextContent = document.createElement("div");
  const h2Title = document.createElement("h2");
  const pPrice = document.createElement("p");
  const btnRemoveCart = document.createElement("button");
  const iTrash = document.createElement("i");

  liCard.classList.add("cart__card");
  divImage.classList.add("cart__image");
  divTextContent.classList.add("card__text-content");
  h2Title.classList.add("card__title");
  pPrice.classList.add("card__price");
  btnRemoveCart.classList.add("card__button");
  iTrash.classList.add("fa-solid", "fa-trash");

  image.src = product.image;
  image.alt = `Imagem de ${product.name}`;
  h2Title.innerText = product.name;
  pPrice.innerText = `R$ ${product.price.toFixed(2)}`;

  btnRemoveCart.addEventListener("click", () => {
    const index = cartProducts.indexOf(product);
    cartProducts.splice(index, 1);

    const cartJson = JSON.stringify(cartProducts);

    localStorage.setItem("@kenzieShop:cart", cartJson);

    renderCartCards(cartProducts);
  });

  divImage.appendChild(image);
  divTextContent.append(h2Title, pPrice);
  btnRemoveCart.appendChild(iTrash);
  liCard.append(divImage, divTextContent, btnRemoveCart);

  return liCard;
};

const renderCards = (array) => {
  const productsList = document.querySelector(".products__list");

  productsList.innerHTML = "";

  array.forEach((product) => {
    const card = createCard(product);

    productsList.appendChild(card);
  });
};

const renderCartCards = (array) => {
  const cartList = document.querySelector(".cart__list");

  cartList.innerHTML = "";

  array.forEach((product) => {
    const card = createCartCard(product);

    cartList.appendChild(card);
  });

  calculateTotal(array);
};

renderCards(products);
renderCartCards(cartProducts);
import { data } from "./data.js";

const root = document.querySelector('.root');
root.classList.add('container');
root.classList.add('main');

const renderAllProducts = (products) => {
  products.map((elem) => {
    root.insertAdjacentHTML(
      `beforeend`,
      `
    <div data-product="${elem.id}" class="product">
      <img src=${elem.image} alt=${elem.name} >
      <h2>${elem.name}</h2>
      <p>R$ ${elem.price}</p>
    </div>
    `,
    );
  });
};

const getCurrentProduct = () => {
  const products = document.querySelectorAll('.product');

  products.forEach((product) =>
    product.addEventListener('click', () => {
      const id = +product.getAttribute('data-product');
      findProduct(id);
    }),
  );
};

const findProduct = (id) => {
  const currentProduct = data.find((elem) => elem.id === id);
  localStorage.setItem('product', JSON.stringify(currentProduct));
  renderProduct();
};

const renderProduct = () => {
  const product = JSON.parse(localStorage.getItem('product'));
  root.innerHTML = '';

  root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="currentProduct">
      <div>
        <img src="${product.image}">
      </div>
      <div class="currentProduct__info">
        <h2>${product.name}</h2>
        <p>R$ ${product.price}</p>
        <p>${product.description}</p>
        <button class="btn" type="button">Comprar</button>
      </div>
    </div>
  `,
  );
};

const goToHomePage = () => {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    root.innerHTML = '';
    renderAllProducts(data);
    getCurrentProduct();
  });
};

renderAllProducts(data);
getCurrentProduct();
goToHomePage();
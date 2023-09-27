const products = [
    {
      name: "Camiseta",
      price: 29.99
    },
    {
      name: "Calça Jeans",
      price: 49.99
    },
    {
      name: "Sapatos",
      price: 59.99
    },
    {
      name: "Vestido",
      price: 39.99
    },
    {
        name: "Casaco",
        price: 129.99
    }
];
//Pegando a posição do elemento pai
const productsList = document.querySelector('ul');

for (let i = 0; i < products.length; i++) {
    //Criando um novo filho
    const listItem = document.createElement('li');

    //Criando filhos do filho (netos da Ul)
    const productName = document.createElement('h3');
    const productPrice = document.createElement('p');
    const addToCartButton = document.createElement('button');

    //Atribuindo valores
    productName.innerText = products[i].name;
    productPrice.innerText = products[i].price;
    addToCartButton.innerText = "Adicionar ao carrinho";

    //Criando estrutura HTML
    listItem.appendChild(productName);
    listItem.appendChild(productPrice);
    listItem.appendChild(addToCartButton);

    productsList.appendChild(listItem);
}

  
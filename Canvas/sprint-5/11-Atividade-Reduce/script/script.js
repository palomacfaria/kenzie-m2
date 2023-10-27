//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  return array.reduce((acc, cur) => { //Acumulador, CurrenteValue (valor atual)
    return acc + cur
  }, 0);
}
console.log(sumNumbers(numbers));

//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  return array.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
}
console.log(totalProducts(products));

//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  const ggProducts = array.filter((product) => product.size === "GG");
  const ggPrice = ggProducts.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return ggPrice;
}
console.log(totalProductsSize(products));

//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.

//*Minha Resolução
function totalProductsSale(array) {
  const saleProducts = array.filter((product) => product.sale === true);
  const totalSale = saleProducts.reduce((acc, cur) => {
    return acc + (cur.price / 2); 
  }, 0);
  return totalSale;
}
console.log(totalProductsSale(products));

//*Resolução da Kenzie
function totalProductsSale(array) {
  const saleProducts = array.filter((product) => product.sale);
  const pricesWithDiscount = saleProducts.map((product) => product.price * 0.5);
  const salePricesTotal = pricesWithDiscount.reduce((accumulator, price) => {
    return accumulator + price;
  }, 0);

  return salePricesTotal;

  // Equivalente
  // return array
  //   .filter((product) => product.sale)
  //   .map((product) => product.price * 0.5)
  //   .reduce((accumulator, price) => {
  //     return accumulator + price;
  //   }, 0);
}
console.log(totalProductsSale(products));
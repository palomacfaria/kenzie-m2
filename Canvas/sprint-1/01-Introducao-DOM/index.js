/* DOM é um acrônimo para Document Object Model (Modelo de Objeto de Documento, em português) e é uma interface de programação que representa a estrutura em árvore de um documento HTML como um conjunto de objetos que podem ser manipulados por códigos JavaScript.

O DOM permite que os desenvolvedores possam acessar e modificar dinamicamente o conteúdo, a estrutura e o estilo da página, bem como adicionar ou remover elementos e interagir com o usuário. */

/* window.document.body.style = "background-color: #000";

window.document.write("Olá");
window.document.write(window.location.href); */

const opcao = prompt("Digite SIM para modificar a cor:");

if (opcao === "SIM") {
  window.document.body.style = "background: #0ff";
}
const article = document.createElement("article");
const articleTitle = document.createElement("h2");
const articleResume = document.createElement("p");
const articleButton = document.createElement("button");


//Atribuindo textos
articleTitle.innerText = "Como criar elementos HTML de forma dinâmica, utilizando Javascript";

articleResume.innerText = "Neste post vamos aprender como criar elementos utilizando o DOM";

articleButton.innerText = "Acessar conteúdo";

console.log(article);
console.log(articleTitle);
console.log(articleResume);
console.log(articleButton);

//Criando estrutura -> Adicionando filhos
article.appendChild(articleTitle);
article.appendChild(articleResume);
article.appendChild(articleButton);
console.log(article);

//Adicionando dentro do HTML
const body = document.querySelector("body");
body.appendChild(article);
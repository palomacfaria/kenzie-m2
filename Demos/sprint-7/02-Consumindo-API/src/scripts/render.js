import { getArticles } from "./request.js";

//Criando cartão
const createCard = (article) => {
    const card = document.createElement("li");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const summary = document.createElement("p");

    img.src = article.image_url;
    title.innerText = article.title;
    
    //Verificando o comprimento do sumário
    if(article.summary.length > 100){
        summary.innerText = `${article.summary.substring(0, 100)}...`;
    }else{
        summary.innerText = article.summary;
    }

    //Adicionando classes
    card.classList.add("card");

    //Adicionando elementos no card
    card.append(img, title, summary);

    return card;
}

//Criando renderização inicial
export const initialRender = async () => {
    const list = document.querySelector(".articles__list");

    list.innerHTML = "";

    //buscando as notícias
    const articles = await getArticles();

    articles.forEach((article) => {
        const card = createCard(article);

        list.appendChild(card);
    });
}
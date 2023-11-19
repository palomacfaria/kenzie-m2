import { getArticles, getMoreArticles } from "./requests.js";

const createCard = (article) => {
  const card = document.createElement("li");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const summary = document.createElement("p");

  //   card.insertAdjacentHTML("beforeend", `
  //   <img class="card__image" src=${article.image_url}>
  //   <h3></h3>
  //   `)

  img.src = article.image_url;
  title.innerText = article.title;

  if (article.summary.length > 100) {
    summary.innerText = `${article.summary.substring(0, 100)}...`;
  } else {
    summary.innerText = article.summary;
  }

  card.classList.add("card");

  card.addEventListener("click", () => {
    const visited = JSON.parse(localStorage.getItem("@ourSpace:visited")) || [];

    visited.unshift(article);

    localStorage.setItem("@ourSpace:visited", JSON.stringify(visited));

    lastVisited();
    open(article.url, "_blank");
  });

  card.append(img, title, summary);

  return card;
};

export const initialRender = async () => {
  const list = document.querySelector(".articles__list");

  list.innerHTML = "";

  const articles = await getArticles();

  articles.forEach((article) => {
    const card = createCard(article);

    list.appendChild(card);
  });
};

export const viewMore = async (initialValue) => {
  const moreArticles = await getMoreArticles(initialValue);

  const list = document.querySelector(".articles__list");

  moreArticles.forEach((article) => {
    const card = createCard(article);

    list.appendChild(card);
  });
};

export const lastVisited = () => {
  const visitedList = document.querySelector(".visited__list");

  const visited = JSON.parse(localStorage.getItem("@ourSpace:visited")) || [];

  visitedList.innerHTML = "";

  visited.forEach((article) => {
    const card = document.createElement("li");
    const img = document.createElement("img");
    const title = document.createElement("h3");

    img.src = article.image_url;
    title.innerText = article.title;

    card.classList.add("card");
    card.append(img, title);

    visitedList.appendChild(card);
  });
};
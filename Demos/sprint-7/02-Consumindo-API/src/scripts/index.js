import { getArticles, getMoreArticles } from "./request.js";
import { initialRender } from "./render.js";

initialRender();

getArticles();
getMoreArticles();
const getArticles = () => {
    const response = fetch("https:/api.spaceflightnewsapi.net/v4/articles");

    return response;
}

const result = getArticles();
console.log(result);
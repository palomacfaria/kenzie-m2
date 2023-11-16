/*
Métodos HTTP

GET
POST
PATCH
PUT
DELETE
*/

const baseUrl = "https://api.spaceflightnewsapi.net";

export const getArticles = async () => {
  const result = await fetch(`${baseUrl}/v4/articles/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  //   console.log(result.results);
  return result.results;
};

export const getMoreArticles = async (initialValue) => {
  const result = await fetch(
    `${baseUrl}/v4/articles/?limit=10&offset=${initialValue}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res.json();
  });

  //   console.log(result.results);
  return result.results;
};
async function getData() {
  const data = await fetch("https://api.github.com/users/palomacfaria")
    const dataJson = await data.json()

    document.body.insertAdjacentHTML("beforeend", `
        <h1>${dataJson.login}</h1>
        <h2>${dataJson.name}</h2>
        <img src="${dataJson.avatar_url}" alt=""/>
    `)
    return data;
}

getData();

//ASYNC espera uma resposta da requisição 
//AWAIT é usado no local onde eu quero esperar a resposta antes de executar
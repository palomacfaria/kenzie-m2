//Async -> Quando a função é assincrona eu estou falando para o javascript que alguma coisa dentro da minha função vai demorar

//Await -> espera

const  getArticles = async () => {
    const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles" //Promessa
        )
        .then(res => { //Pegando a resposta e transformando em json assim como no insonimia
            return res.json();
        })

    return response;
}

const result = await getArticles();
console.log(result);
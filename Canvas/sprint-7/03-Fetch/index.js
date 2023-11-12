fetch("https://api.github.com/users/palomacfaria")
.then(function(response){
    return response.json();
})
.then(function(responseJson){
    document.body.insertAdjacentHTML("beforeend", `
        <div class = "card">
            <img src="${responseJson.avatar_url} alt""/>
            <h1>${responseJson.name}</h1>
            <p>${responseJson.bio}</p>
        </div>
    `);
});


fetch("https://api.github.com/users/palomacfaria/repos")
.then(function(response){
    return response.json();
})
.then(function(responseJson){
    responseJson.map((repository ) => 
        document.body.insertAdjacentHTML("beforeend",`
        <div class = "card">
            <h1>${repository.name}</h1>
            <a href="${repository.html_url}">Acessar repositório</a>
        </div>
    `)
    )
})
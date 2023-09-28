const movies = [
  {
    title: "Matrix",
    poster: "./imgs/poster-matrix.jpg",
    genere: "Ficção CIêntifica",
    release: false,
    reted: "R",
    synopsis: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
  },
  {
    title: "O Poderoso Chefão",
    poster: "./imgs/poster-o-poderoso-chefao.webp",
    genere: "Drama",
    release: false,
    reted: "R",
    synopsis: "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios."
  },
  {
    title: "A Origem",
    poster: "./imgs/poster-a-origem.jpg",
    genere: "Ação",
    release: true,
    reted: "PG-13",
    synopsis: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos."
  },
  {
    title: "As Branquelas",
    poster: "./imgs/poster-as-branquelas.jpg",
    genere: "Comédia",
    release: false,
    reted: "G",
    synopsis: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras."
  },
  {
    title: "Para Sempre",
    poster: "./imgs/poster-para-sempre.jpg",
    genere: "Romance",
    release: true,
    reted: "PG-13",
    synopsis: "Paige e Leo são felizes recém-casados, mas um acidente deixa Paige em coma. Quando ela acorda, não reconhece Leo, tem problemas de relacionamento com os pais e se sente atraída pelo ex-noivo. Mas Leo está determinado a reconstruir seu casamento."
  },
];

function createMovieCard(movieInfo) {
  //*Criando elementos necessários
  //Card
  const liMovie = document.createElement("li");
  const imgMoviePoster = document.createElement("img");
  //Movie Content
  const divMovieContent = document.createElement("div");
  const divMovieInfo = document.createElement("div");
  const h3MovieTitle = document.createElement("h3");
  const h4MovieGenere = document.createElement("h4");
  const spanMoviRating = document.createElement("span");
  const divMovieStarReating = document.createElement("div");
  const pMovieSinopse = document.createElement("p");
  //Movie Actions
  const divMovieActions = document.createElement("div");
  const btnMovieWatchList = document.createElement("button");
  const btnMovieRent = document.createElement("button");

  //*Adicionando um elemento por vez
  /* liMovie.appendChild(imgMoviePoster); 
  liMovie.appendChild(divMovieInfo); */

  //*Formando estrutura passando mais de um elemento por vez
  liMovie.append(imgMoviePoster, divMovieContent);
  divMovieContent.append(divMovieInfo, divMovieActions);
  divMovieInfo.append(h3MovieTitle, h4MovieGenere, spanMoviRating, divMovieStarReating, pMovieSinopse);
  divMovieActions.append(btnMovieWatchList, btnMovieRent);

  //*Atribuindo valores e classes
  //Card (li)
  liMovie.classList.add("movie");

  //Poster (img)
  imgMoviePoster.classList.add("movie__poster");
  imgMoviePoster.src = movieInfo.poster;
  imgMoviePoster.alt = `Poster do filme ${movieInfo.title}`;

  //Conteudo (div)
  divMovieContent.classList.add("movie__content");

  //Informações (div)
  divMovieInfo.classList.add("movie__info");

  //Titulo (h3)
  h3MovieTitle.innerText = movieInfo.title;
  h3MovieTitle.classList.add("movie__title");

  //Gênero (h4)
  h4MovieGenere.innerText = movieInfo.genere;
  h4MovieGenere.classList.add("movie__genere");

  //Classificação etária (span)
  spanMoviRating.innerText = movieInfo.reted;
  spanMoviRating.classList.add("movie__rating");

  if (movieInfo.reted === "R") {
    spanMoviRating.classList.add("movie__rating--r");
  } else if(movieInfo.reted === "PG-13") {
    spanMoviRating.classList.add("movie__rating--pg-13");
  } else if(movieInfo.reted === "G" ) {
    spanMoviRating.classList.add("movie__rating--g");
  }

  //Estrelas (div)
  divMovieStarReating.classList.add("movie__star-reating");

  for(let i = 0; i < 5; i++){
    const iStarIcon = document.createElement('i');
    iStarIcon.classList.add("fa", "fa-star");

    if(i < 4){
      iStarIcon.classList.add("star-checked");
    }

    divMovieStarReating.appendChild(iStarIcon);
  }

  //Spinose (p)
  pMovieSinopse.innerText = movieInfo.synopsis;
  pMovieSinopse.classList.add("movie__synopsis");

  //Actions (div)
  divMovieActions.classList.add("movie__actions");

  //Botões
  btnMovieWatchList.innerText = "Adicionar a WatchList";
  btnMovieWatchList.classList.add("movie__actions-button");
  btnMovieRent.innerText = "Alugar";
  btnMovieRent.classList.add("movie__actions-button");

  console.log(liMovie);

  return liMovie;
}

//Mostrando na tela os cards
function renderCards(movieList){
  
  //*Inserindo nossa estrutura dentro do pai (ul)
  const ulMovies = document.querySelector(".movies");

  //ulMovies.innerHTML = "";
  console.log(ulMovies);

  for(let i = 0; i < movieList.length; i++){
    const currentMovie = movieList[i];
    const card = createMovieCard(currentMovie);
    ulMovies.append(card);
  }
}
renderCards(movies);
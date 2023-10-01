let element = document.getElementsByClassName("article")[0];


//*PROPRIEDADES
/* TARGET
A propriedade target, faz uma referência ao elemento no qual o evento iniciou. */

/* CURRENTTARGET
A propriedade currenTarget, identifia o destino atual do evento. Em suma, identifiaca o elemento no qual o evento está. */
element.addEventListener('click', function(event){
    console.log("---> target", event.target);
    //* ---> target <a class="link_to" href="#">Clique aqui</a>
    console.log("---> currentTarget", event.currentTarget);
    //* ---> currentTarget (toda estrutura do artcle);
});

//*MÉTODOS
/* PREVENTDEFAULT()
Iterrompe o comportamento padrão do browser. Faz com que algo seria executado normalmente, não seja. */

/* STOPPROPAGATON()
Iterrompe a propragação dos eventos do mesmo tipo do evento de origem na fase de bubling ou capturing. */

let elementLink = document.getElementsByClassName('link_to')[0];

elementLink.addEventListener('click', function(event){
    event.preventDefault(); //Não me redirecionou apenas previu uma ação que seria executada 
    event.stopPropagation(); //Para o evento
});
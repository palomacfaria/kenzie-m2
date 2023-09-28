function addClassParagraph(){
    const paragraph = document.querySelector('p');

    //Verificando se a classe existe
    // if(paragraph.classList.contains('paragraph-black')){
    //     removendo classe
    //     paragraph.classList.remove('paragraph-black');
    // }else{
    //     Adicionando classe
    //     paragraph.classList.add("paragraph-black");
    // }

    //USANDO UM MÉTODO QUE TEM A MESMA FUNÇÃO DO CÓDIGO ACIMA

    const classResulte = paragraph.classList.toggle('paragraph-black');
    
    if(classResulte){
        paragraph.innerText = "A classe foi adicionada";
    }else{
        paragraph.innerText = "A classe foi removida";
    }
    console.log(classResulte);
}
addClassParagraph(); //Adiciounou classe
addClassParagraph();//Removeu classe
addClassParagraph(); //Adiciounou classe

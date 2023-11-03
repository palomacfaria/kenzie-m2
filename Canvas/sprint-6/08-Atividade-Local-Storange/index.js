const button = document.querySelector('button');
const body = document.body;

let darkMode = false;

function themeChange(){
    darkMode = !darkMode;
    console.log(darkMode);
    body.classList.toggle('dark-mode');

    localStorage.setItem("theme", JSON.stringify(darkMode));
}
button.addEventListener("click", themeChange);

function themeAnalisys(){
    darkMode = JSON.parse(localStorage.getItem("theme"));
    if(darkMode){
        body.classList.add('dark-mode');
    }
    console.log(darkMode);
}

themeAnalisys();
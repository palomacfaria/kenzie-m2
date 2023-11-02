const tasks = [
    {nameTask: "Fazer as compras no supermercado"},
    {nameTask: "Meditar durante 30 minutos"},
    {nameTask: "Almoçar ás 12:30"},
    {nameTask: "Ler o livro Y depois do almoço"},
]

//*CRIANDO ELEMENTOS
function createTaskItem(task){
    const divContainer = document.createElement("div");
    const pText = document.createElement("p");
    const buttonDelete = document.createElement("button");

    //*ESTRUTURANDO ELEMENTOS 
    divContainer.append(pText, buttonDelete);

    //*ADICIONANDO CLASSES
    divContainer.classList.add("item__container");
    pText.classList.add("item__text");
    buttonDelete.classList.add("item__delete");

    //*ADICIONANDO TEXTO DA TAREFA E BOTÃO
    pText.innerText = task.nameTask;
    buttonDelete.innerText = "Excluir"

    //*ADICIONANDO EVENTO AO BOTÃO DELETE
    buttonDelete.addEventListener("click", () => {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);

        renderTasks(tasks);
    });

    return divContainer;
}

//*RENDERIZANDO ELEMENTOS
function renderTasks(task){
    const divListContainer = document.querySelector(".list__container");

    //*LIMPANDO CONTEUDO ANTES DE RENDERIZAR
    divListContainer.innerHTML = "";

    for(let i = 0; i < task.length; i++){
        const currentTask = task[i];
        const taskItem = createTaskItem(currentTask);
        divListContainer.append(taskItem);
    }
}

//*CRIANDO NOVA TASK
function createNewTask(){
    //Capturando a div onde o botão de adicionar está inserido
    const form = document.querySelector(".task__container");
    console.log(form);

    form.addEventListener("submit", (event) => {
        //Impedindo que a página recarregue por padrão ao clicar no botão
        event.preventDefault();

        //Selecionando input onde será inserido o texto da nova tarefa
        const inputTask = document.querySelector(".task__input");

        //Pegando os valores inseridos pelo usuário
        const inputTaskValue = inputTask.value;

        //Criando um novo objeto para renderizar
        const newtask = {
            nameTask: inputTaskValue
        }

        //Adicionando nova task
        tasks.push(newtask);

        //*CONVERTENDO O ARRAY DE TASKS PARA JSON
        const arrayTaskJSON = JSON.stringify(tasks);

        //Adicionando no LocalStorange
        localStorage.setItem('Lista de Tarefas', arrayTaskJSON);

        //Chamando a função de renderização após adicionar um novo elemento
        renderTasks(tasks);
    });
}

//*REMOVENDO TASK LOCALSTORANGE
function removeTaskLocalStorange(){

}

//*LENDO DADOS LOCALSTORANGE
function getTaskLocalStorange() {
    // Pega os dados no localStorage
    const dadosNoLocalStorageJSON = localStorage.getItem('listaDeAfazeres');
     
    // Verifica se os dados existem no localStorage
    if(dadosNoLocalStorageJSON) {
    // Transforma os dados de JSON para Javascript válido
    const dadosNoLocalStorage = JSON.parse(dadosNoLocalStorageJSON);
 
    // Chama a função que renderiza os dados
    renderTasks(dadosNoLocalStorage);
    }
 }
 
renderTasks(tasks);
createNewTask();
getTaskLocalStorange();
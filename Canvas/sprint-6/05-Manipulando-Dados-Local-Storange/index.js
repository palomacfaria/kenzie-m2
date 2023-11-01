//Criando dados no LocalStorange
//setItem("Chave do item", "Valo do item") -> recebe 2 parametros
localStorage.setItem("nome", "João");

//Lendo dados no LocalStorange
const nome = localStorage.getItem("nome"); //Recuperando o valor com o nome da chave
console.log(nome);

//Atualizando dados no LocalStorange
//setItem("Chave do item", Valor atualizado do item) -> Recebe 2 parametros
localStorage.setItem("nome", "Maria");

//Removendo itens do LocalStorange
localStorage.removeItem("nome"); //Deletando pelo nome da chave
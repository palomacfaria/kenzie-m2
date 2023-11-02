//* Adicionando um item ao carrinho
const item = {
    nome: 'Camiseta',
    preco: 29.99
};
let carrinho = [];
if (localStorage.getItem('carrinho')) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'));
}
carrinho.push(item);
localStorage.setItem('carrinho', JSON.stringify(carrinho));

// Exibindo os itens do carrinho
let carrinhoExibicao = '';
if (localStorage.getItem('carrinho')) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho.forEach(item => {
        carrinhoExibicao += item.nome + ' - R$' + item.preco.toFixed(2) + '<br>';
    });
}
document.getElementById('carrinho').innerHTML = carrinhoExibicao;

//* Salvando uma nota
const nota = {
    titulo: 'Compras',
    conteudo: 'Leite, pão, manteiga',
    dataCriacao: new Date()
};
let notas = [];
if (localStorage.getItem('notas')) {
    notas = JSON.parse(localStorage.getItem('notas'));
}
notas.push(nota);
localStorage.setItem('notas', JSON.stringify(notas));

// Exibindo as notas
let notasExibicao = '';
if (localStorage.getItem('notas')) {
    const notas = JSON.parse(localStorage.getItem('notas'));
    notas.forEach(nota => {
        notasExibicao += nota.titulo + '<br>' + nota.conteudo + '<br>' + new Date(nota.dataCriacao).toLocaleDateString() + '<br>';
    });
}
document.getElementById('notas').innerHTML = notasExibicao;


//* Salvando o progresso do jogo
const progresso = {
    pontuacao: 1000,
    nivel: 3,
    itensComprados: ['espada', 'escudo']
};
localStorage.setItem('progresso', JSON.stringify(progresso));

// Exibindo o progresso do jogo
if (localStorage.getItem('progresso')) {
    const progresso = JSON.parse(localStorage.getItem('progresso'));
    console.log('Pontuação: ' + progresso.pontuacao);
    console.log('Nível: ' + progresso.nivel);
    console.log('Itens comprados: ' + progresso.itensComprados.join(', '));
}

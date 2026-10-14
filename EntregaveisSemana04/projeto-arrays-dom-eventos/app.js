// ==========================================
// BLOCO 1
// ==========================================


// Array com 3 nomes
const nomes = ["Ana", "Carlos", "Mariana"];

// forEach: percorre cada nome
nomes.forEach(function (nome) {
    console.log(`Olá, ${nome}!`);
});

// map: cria um novo array com os nomes em maiúsculas
const nomesMaiusculos = nomes.map(function (nome) {
    return nome.toUpperCase();
});

console.log(nomesMaiusculos);

// Array de preços
const precos = [10, 25, 40, 5, 60];

// filter: pega apenas os preços acima de 20
const precosAcimaDe20 = precos.filter(function (preco) {
    return preco > 20;
});

console.log(precosAcimaDe20);

// reduce: soma todos os preços
const somaPrecos = precos.reduce(function (total, preco) {
    return total + preco;
}, 0);

console.log(somaPrecos);

// Array de objetos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 40 }
];

// map: extrair somente os nomes
const nomesProdutos = produtos.map(function (produto) {
    return produto.nome;
});

console.log(nomesProdutos);

// filter: produtos com preço menor que 50
const produtosBaratos = produtos.filter(function (produto) {
    return produto.preco < 50;
});

console.log(produtosBaratos);

// reduce: somar todos os preços
const totalProdutos = produtos.reduce(function (total, produto) {
    return total + produto.preco;
}, 0);

console.log(totalProdutos);

// forEach: imprimir nome e preço
produtos.forEach(function (produto) {
    console.log(`Nome: ${produto.nome} - R$ ${produto.preco}`);
});


// ==========================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ==========================================

// Selecionando o h1
const titulo = document.querySelector("#titulo");

// Alterando o texto
titulo.textContent = "Blog do Zayron";

console.log(titulo);

// Selecionando todos os elementos com a classe .texto
const paragrafos = document.querySelectorAll(".texto");

// Imprimindo o texto de cada parágrafo
paragrafos.forEach(function (paragrafo) {
    console.log(paragrafo.textContent);
});

// Selecionando a lista
const lista = document.querySelector("#lista");

// Inserindo dois itens usando innerHTML
lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// Criando um novo elemento li
const terceiroItem = document.createElement("li");

// Definindo o texto
terceiroItem.textContent = "Terceiro item";

// Adicionando à lista
lista.append(terceiroItem);

// Adicionando a classe destaque
terceiroItem.classList.add("destaque");

// Verificando se a classe foi adicionada
console.log(
    terceiroItem.classList.contains("destaque")
);

// Array de tarefas
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

// Criando um li para cada tarefa
tarefas.forEach(function (tarefa) {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

// Selecionando todos os li da lista
const itensLista = lista.querySelectorAll("li");

// Aplicando a classe feito ao primeiro item
itensLista[0].classList.add("feito");

// Mostrando a quantidade de itens
console.log(
    "Quantidade de itens:",
    lista.querySelectorAll("li").length
);

// ==========================================
// BLOCO 3 - EVENTOS
// ==========================================

// Selecionando o botão
const botao = document.querySelector("#botao");

// Click
botao.addEventListener("click", function () {
    console.log("Clicou!");
});

// Mouseover
botao.addEventListener("mouseover", function () {
    botao.textContent = "Pode clicar!";
});


// ==========================================
// KEYUP
// ==========================================

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function () {
    console.log(campoNome.value);
});


// ==========================================
// EVENT DELEGATION
// ==========================================

lista.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log(e.target.textContent);
    }

});


// ==========================================
// FORMULÁRIO
// ==========================================

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = textoTarefa;

    lista.append(novaTarefa);

    campoTarefa.value = "";
});
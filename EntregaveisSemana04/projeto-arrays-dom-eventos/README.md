# Arrays, DOM e Eventos em JavaScript

## 📚 Sobre o projeto

Este projeto foi desenvolvido como atividade prática da aula de JavaScript, com o objetivo de aplicar conceitos de **Arrays, manipulação do DOM e eventos**.

O projeto é executado diretamente no navegador, utilizando o arquivo `index.html` e o arquivo `app.js`.

Durante a atividade foram utilizados métodos de arrays como `forEach`, `map`, `filter` e `reduce`, além de técnicas de manipulação do DOM e tratamento de eventos.

---

## 📁 Estrutura do projeto

```text
projeto-arrays-dom-eventos/
├── index.html
├── app.js
└── README.md
```

### `index.html`

Contém a estrutura da página e os elementos que serão manipulados pelo JavaScript.

### `app.js`

Contém todos os códigos JavaScript responsáveis pelos exercícios de Arrays, DOM e Eventos.

### `README.md`

Contém a descrição do projeto e a explicação dos principais conceitos utilizados.

---

# 🔹 Bloco 1 — Arrays e Métodos

Nesta etapa foram utilizados quatro métodos importantes de arrays.

## `forEach()`

O `forEach()` é utilizado para percorrer cada elemento de um array e executar uma determinada ação.

No projeto, ele foi utilizado para percorrer os nomes e imprimir uma mensagem no Console:

```javascript
nomes.forEach(function (nome) {
    console.log(`Olá, ${nome}!`);
});
```

Também foi utilizado para percorrer os produtos e mostrar seus nomes e preços.

---

## `map()`

O `map()` percorre um array e cria um **novo array** com os resultados de uma transformação.

No projeto, foi utilizado para transformar os nomes em letras maiúsculas:

```javascript
const nomesMaiusculos = nomes.map(function (nome) {
    return nome.toUpperCase();
});
```

Também foi utilizado para extrair somente os nomes dos produtos.

O `map()` não modifica o array original.

---

## `filter()`

O `filter()` cria um **novo array contendo apenas os elementos que atendem a uma determinada condição**.

Exemplo utilizado no projeto:

```javascript
const precosAcimaDe20 = precos.filter(function (preco) {
    return preco > 20;
});
```

Nesse caso, somente os preços maiores que 20 são mantidos.

Também foi utilizado para encontrar produtos com preço menor que 50.

---

## `reduce()`

O `reduce()` é utilizado para percorrer os elementos de um array e acumulá-los em um único resultado.

No projeto, ele foi utilizado para somar os preços:

```javascript
const somaPrecos = precos.reduce(function (total, preco) {
    return total + preco;
}, 0);
```

O resultado da soma foi:

```text
140
```

Diferentemente de `map()` e `filter()`, que retornam novos arrays, o `reduce()` utilizado neste projeto retorna um único valor.

---

# 🔹 Bloco 2 — Manipulação do DOM

O DOM (Document Object Model) representa a estrutura HTML da página e permite que o JavaScript encontre e modifique seus elementos.

## `querySelector()`

O `querySelector()` permite selecionar o primeiro elemento que corresponde a um seletor CSS.

Exemplo:

```javascript
const titulo = document.querySelector("#titulo");
```

Nesse projeto, ele foi utilizado para selecionar o elemento `h1`.

---

## `querySelectorAll()`

O `querySelectorAll()` seleciona todos os elementos que correspondem ao seletor informado.

Exemplo:

```javascript
const paragrafos = document.querySelectorAll(".texto");
```

Foi utilizado para selecionar todos os parágrafos que possuem a classe `texto`.

---

## `createElement()`

O `createElement()` permite criar novos elementos HTML utilizando JavaScript.

Exemplo:

```javascript
const novoItem = document.createElement("li");
```

Depois, o texto foi definido com `textContent` e o elemento foi adicionado à lista.

---

## `append()`

O `append()` adiciona um elemento ao final de outro elemento.

Exemplo:

```javascript
lista.append(novoItem);
```

Foi utilizado para adicionar novos itens à lista de tarefas.

---

## `classList`

O `classList` permite manipular as classes CSS de um elemento.

No projeto foram utilizados métodos como:

```javascript
elemento.classList.add("destaque");
```

para adicionar uma classe, e:

```javascript
elemento.classList.contains("destaque");
```

para verificar se a classe existe.

Também foi utilizado:

```javascript
elemento.classList.toggle("feito");
```

para alternar entre adicionar e remover uma classe.

---

# 🔹 Bloco 3 — Eventos

Os eventos permitem que o JavaScript responda às ações realizadas pelo usuário.

Foram utilizados eventos como:

- `click`
- `mouseover`
- `keyup`
- `submit`

## `addEventListener()`

O `addEventListener()` permite registrar uma função que será executada quando determinado evento acontecer.

Exemplo:

```javascript
botao.addEventListener("click", function () {
    console.log("Clicou!");
});
```

---

## `keyup`

O evento `keyup` é executado quando uma tecla é liberada.

No projeto, ele foi utilizado para mostrar no Console o conteúdo digitado no campo de nome.

---

## Event Delegation

O **Event Delegation** é uma técnica que permite colocar um único listener em um elemento pai para controlar eventos dos elementos filhos.

Neste projeto, foi utilizado um único listener na lista:

```javascript
lista.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});
```

Em vez de adicionar um evento individual para cada `<li>`, o evento é colocado na `<ul>`.

O `e.target` identifica qual elemento recebeu o clique.

A verificação:

```javascript
e.target.tagName === "LI"
```

garante que a ação será executada somente quando o elemento clicado for um `<li>`.

Uma das principais vantagens dessa técnica é que ela também funciona para elementos adicionados dinamicamente depois que a página já foi carregada.

---

# 🔹 Formulário

O projeto também possui um formulário para adicionar novas tarefas.

Foi utilizado o evento `submit`:

```javascript
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
});
```

O método:

```javascript
e.preventDefault();
```

impede o comportamento padrão do formulário, evitando que a página seja recarregada.

O texto digitado é obtido com:

```javascript
campoTarefa.value.trim();
```

O `trim()` remove espaços desnecessários no início e no final do texto.

Caso o campo esteja vazio, nenhuma tarefa é adicionada.

Caso exista um texto válido, um novo `<li>` é criado e adicionado à lista.

---

# 🎯 Objetivos alcançados

Com este projeto foi possível praticar:

- Criação e manipulação de arrays;
- Uso de `forEach()`;
- Uso de `map()`;
- Uso de `filter()`;
- Uso de `reduce()`;
- Seleção de elementos do DOM;
- Criação de elementos HTML com JavaScript;
- Manipulação de classes;
- Criação de eventos;
- Uso de `addEventListener()`;
- Manipulação de formulários;
- Uso de `preventDefault()`;
- Uso de `e.target`;
- Event Delegation;
- Criação dinâmica de elementos.

O projeto demonstra, na prática, como JavaScript pode ser utilizado para transformar uma página HTML estática em uma página dinâmica e interativa.
# Projeto de Consumo de APIs e Manipulação do DOM

Projeto desenvolvido em JavaScript utilizando objetos, arrays, métodos de array, DOM, eventos, Promises, async/await e Fetch API.

## Tecnologias

- HTML
- JavaScript
- Fetch API
- ViaCEP API
- PokéAPI

## Parte 1 - Manipulação e Validação de Dados

Os pedidos são validados verificando se o cliente não está vazio e se o valor é numérico e maior que zero.

Depois são filtrados apenas os pedidos com status "pago".

O método `reduce` é utilizado para calcular o total faturado.

O método `map` gera textos no formato:

`Bia — R$ 120.00`

## Parte 2 - Buscador de CEP

O projeto utiliza a API ViaCEP para consultar endereços.

O CEP é validado utilizando `trim()` e expressão regular.

A requisição utiliza `fetch` com `async/await`.

São tratados quatro estados:

- Carregando
- Erro
- Não encontrado
- Sucesso

Em caso de sucesso, os elementos são criados dinamicamente utilizando `createElement()` e `textContent`.

O projeto também possui um histórico dos CEPs pesquisados.

`AbortSignal.timeout(5000)` é utilizado para evitar que uma requisição fique pendente indefinidamente.

## Parte 3 - Mini Pokédex

A Mini Pokédex utiliza a PokéAPI para pesquisar Pokémon pelo nome.

São exibidos:

- Nome
- Imagem
- Tipos

O projeto verifica `response.ok` para identificar erros HTTP, incluindo o erro 404.

## Quatro estados da interface

### Carregando

Exibe uma mensagem informando que a requisição está sendo realizada e desabilita o botão.

### Erro

Trata erros de conexão e erros HTTP.

### Vazio / Não encontrado

Exibe uma mensagem quando o CEP ou Pokémon não é encontrado.

### Sucesso

Limpa o resultado anterior e cria os elementos necessários dinamicamente.

## Event Loop

O JavaScript executa primeiro o código síncrono.

Depois são processadas as microtarefas, como Promises e `await`.

Por último são executadas tarefas, como eventos e `setTimeout`.

## Promise.all

`Promise.all` pode ser mais rápido que vários `await` seguidos porque os `await` sequenciais aguardam uma Promise terminar antes de iniciar a próxima requisição.

Com `Promise.all`, várias Promises podem ser iniciadas praticamente ao mesmo tempo e o código aguarda todas terminarem.

Exemplo:

```javascript
const [resultado1, resultado2] = await Promise.all([
    fetch(url1),
    fetch(url2)
]);
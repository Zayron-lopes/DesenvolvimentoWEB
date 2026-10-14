// ==========================================
// PARTE 1 - MANIPULAÇÃO E VALIDAÇÃO DE DADOS
// ==========================================

const pedidos = [
    {
        cliente: "Bia",
        valor: 120,
        status: "pago"
    },
    {
        cliente: "Carlos",
        valor: 80,
        status: "pendente"
    },
    {
        cliente: "",
        valor: 50,
        status: "pago"
    },
    {
        cliente: "Mariana",
        valor: 200,
        status: "pago"
    },
    {
        cliente: "João",
        valor: -30,
        status: "pago"
    }
];

const pedidosValidos = pedidos.filter(function (pedido) {
    return (
        pedido.cliente.trim() !== "" &&
        typeof pedido.valor === "number" &&
        pedido.valor > 0
    );
});

console.log("Pedidos válidos:", pedidosValidos);

const pedidosPagos = pedidosValidos.filter(function (pedido) {
    return pedido.status === "pago";
});

console.log("Pedidos pagos:", pedidosPagos);

const totalFaturado = pedidosPagos.reduce(function (total, pedido) {
    return total + pedido.valor;
}, 0);

console.log("Total faturado:", totalFaturado.toFixed(2));

const textosPedidos = pedidosPagos.map(function (pedido) {
    return `${pedido.cliente} — R$ ${pedido.valor.toFixed(2)}`;
});

console.log("Pedidos:", textosPedidos);


// ==========================================
// PARTE 2 - BUSCADOR DE CEP
// ==========================================

const formCep = document.querySelector("#formCep");
const campoCep = document.querySelector("#cep");
const botaoCep = document.querySelector("#botaoCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");
const historicoCep = document.querySelector("#historicoCep");

const historico = [];

formCep.addEventListener("submit", async function (e) {
    e.preventDefault();

    const cep = campoCep.value.trim().replace(/\D/g, "");

    if (!/^\d{8}$/.test(cep)) {
        statusCep.textContent = "Digite um CEP válido com 8 dígitos.";
        resultadoCep.replaceChildren();
        return;
    }

    statusCep.textContent = "Buscando...";
    botaoCep.disabled = true;
    resultadoCep.replaceChildren();

    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`,
            {
                signal: AbortSignal.timeout(5000)
            }
        );

        if (!response.ok) {
            throw new Error("Erro HTTP");
        }

        const dados = await response.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado";
            return;
        }

        resultadoCep.replaceChildren();

        const dadosCep = [
            ["Rua", dados.logradouro],
            ["Bairro", dados.bairro],
            ["Cidade", dados.localidade],
            ["UF", dados.uf]
        ];

        dadosCep.forEach(function ([titulo, valor]) {
            const dt = document.createElement("dt");
            const dd = document.createElement("dd");

            dt.textContent = titulo;
            dd.textContent = valor || "Não informado";

            resultadoCep.append(dt, dd);
        });

        statusCep.textContent = "";

        historico.push({
            cep: cep,
            cidade: dados.localidade,
            uf: dados.uf
        });

        atualizarHistorico();

    } catch (erro) {
        if (erro.name === "TimeoutError") {
            statusCep.textContent =
                "A requisição demorou muito para responder.";
        } else {
            statusCep.textContent =
                "Falha na conexão. Tente novamente.";
        }

        resultadoCep.replaceChildren();

    } finally {
        botaoCep.disabled = false;
    }
});

function atualizarHistorico() {
    historicoCep.replaceChildren();

    historico.forEach(function (item) {
        const li = document.createElement("li");

        li.textContent =
            `${item.cep} — ${item.cidade}/${item.uf}`;

        historicoCep.append(li);
    });
}


// ==========================================
// PARTE 3 - MINI POKÉDEX
// ==========================================

const formPokemon = document.querySelector("#formPokemon");
const campoPokemon = document.querySelector("#pokemon");
const botaoPokemon = document.querySelector("#botaoPokemon");
const statusPokemon = document.querySelector("#statusPokemon");
const resultadoPokemon = document.querySelector("#resultadoPokemon");

formPokemon.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nomePokemon = campoPokemon.value.trim().toLowerCase();

    if (nomePokemon === "") {
        statusPokemon.textContent =
            "Digite o nome de um Pokémon.";

        resultadoPokemon.replaceChildren();

        return;
    }

    statusPokemon.textContent = "Buscando...";
    botaoPokemon.disabled = true;
    resultadoPokemon.replaceChildren();

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("POKEMON_NOT_FOUND");
            }

            throw new Error("Erro HTTP");
        }

        const pokemon = await response.json();

        resultadoPokemon.replaceChildren();

        const titulo = document.createElement("h2");

        titulo.textContent =
            pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1);

        const imagem = document.createElement("img");

        imagem.src = pokemon.sprites.front_default;
        imagem.alt = `Imagem do Pokémon ${pokemon.name}`;

        const tipos = document.createElement("p");

        const nomesTipos = pokemon.types.map(function (tipo) {
            return tipo.type.name;
        });

        tipos.textContent =
            `Tipos: ${nomesTipos.join(", ")}`;

        resultadoPokemon.append(
            titulo,
            imagem,
            tipos
        );

        statusPokemon.textContent = "";

    } catch (erro) {

        if (erro.message === "POKEMON_NOT_FOUND") {
            statusPokemon.textContent =
                "Pokémon não encontrado.";
        } else {
            statusPokemon.textContent =
                "Falha na conexão. Tente novamente.";
        }

        resultadoPokemon.replaceChildren();

    } finally {
        botaoPokemon.disabled = false;
    }
});
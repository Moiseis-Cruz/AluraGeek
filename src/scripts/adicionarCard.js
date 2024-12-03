import { serviceApi } from "./serviceApi.js";
import { validarCampos } from "./validation.js";
// import { exibirMensagemErro } from "./messages.js";

// Seleção dos elementos do DOM
const addCardBtn = document.getElementById("add-card-button");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");
const priceInput = document.getElementById("price");
const clearBtn = document.getElementById("clear-button");

// Função para criar um novo card
async function criarVideo(evento) {
    evento.preventDefault();

    const valores = validarCampos(nameInput, imageInput, priceInput);
    if (!valores) return; // Interrompe a execução se a validação falhar

    const { nameValue, imageValue, priceValue } = valores;

    await serviceApi.adicionarCard(imageValue, nameValue, priceValue);
}

// Função para limpar os campos do formulário
function limparCampo(evento) {
    evento.preventDefault();
    nameInput.value = "";
    imageInput.value = "";
    priceInput.value = "";
}

// Adicionando eventos aos botões
addCardBtn.addEventListener("click", criarVideo);
clearBtn.addEventListener("click", limparCampo);
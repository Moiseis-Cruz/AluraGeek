import { serviceApi } from "./serviceApi.js";
import { validarCampos } from "./validation.js";

const addCardBtn = document.getElementById("add-card-button");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");
const priceInput = document.getElementById("price");
const clearBtn = document.getElementById("clear-button");

async function criarVideo(evento) {
    evento.preventDefault();

    const valores = validarCampos(nameInput, imageInput, priceInput);
    if (!valores) return;

    const { nameValue, imageValue, priceValue } = valores;

    await serviceApi.adicionarCard(imageValue, nameValue, priceValue);
};

function limparCampo(evento) {
    evento.preventDefault();
    nameInput.value = "";
    imageInput.value = "";
    priceInput.value = "";
};

addCardBtn.addEventListener("click", criarVideo);
clearBtn.addEventListener("click", limparCampo);

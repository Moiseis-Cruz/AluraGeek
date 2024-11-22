import { serviceApi } from "./serviceApi.js";

const addCardBtn = document.getElementById("add-card-button");
const name = document.getElementById("name");
const image = document.getElementById("image");
const price = document.getElementById("price");

async function criarVideo(evento){
    evento.preventDefault();

    const nameValue = name.value;
    const imageValue = image.value;
    const priceValue = price.value;

    await serviceApi.adicionarCard(imageValue, nameValue, priceValue);
};

addCardBtn.addEventListener("click", evento => criarVideo(evento));

const clearBtn = document.getElementById("clear-button");

function limparCampo(evento){
    evento.preventDefault();

    name.value = "";
    image.value = "";
    price.value = "";
}

clearBtn.addEventListener("click", evento => limparCampo(evento));

import { serviceApi } from "./serviceApi.js";

const addCardBtn = document.getElementById("add-card-button");
const name = document.getElementById("name");
const image = document.getElementById("image");
const price = document.getElementById("price");

async function criarVideo(evento){
    evento.preventDefault();

    const nameValue = name.value.trim();
    const imageValue = image.value.trim();
    const priceValue = price.value.trim();

    if(nameValue === "" || imageValue === "" || priceValue === ""){
        alert(`Preencha todos os campos, por favor!`);
        return;
    };

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

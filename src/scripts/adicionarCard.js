import { serviceApi } from "./serviceApi.js";

const formCards = document.querySelector("[data-form]");

async function criarVideo(evento){
    evento.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;

    await serviceApi.adicionarCard(image, name, price);
};

formCards.addEventListener("submit", evento => criarVideo(evento));

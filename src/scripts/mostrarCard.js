import { serviceApi } from "./serviceApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(image, name, price){
    const card = document.createElement("li");
    card.innerHTML = `  
        <li class="product-card">
            <img class="card-image" src="${image}" alt="">
            <h3 class="product-name">${name}</h3>
            <div>
                <p class="product-price">$ ${price}</p>
                <button class="delete-product-button">🗑️</button>
            </div>
        </li>`

    return card;
};

async function gerarCards() {
    const listaApi = await serviceApi.listaCards();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.image, elemento.name, elemento.price)));
};

gerarCards();

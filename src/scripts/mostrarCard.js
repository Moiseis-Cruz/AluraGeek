import { serviceApi } from "./serviceApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(id, image, name, price){
    const card = document.createElement("li");
    card.innerHTML = `  
        <li class="product-card">
            <img class="card-image" src="${image}" alt="">
            <h3 class="product-name">${name}</h3>
            <div>
                <p class="product-price">$ ${price}</p>
                <button class="delete-product-button" data-id="${id}">🗑️</button>
            </div>
        </li>`;

        const deleteButton = card.querySelector(".delete-product-button");
    deleteButton.addEventListener("click", async () => {
        await serviceApi.deleteCard(id);
        card.remove();
    });
    return card;
};

async function gerarCards() {
    const listaApi = await serviceApi.listaCards();

    lista.innerHTML = ''; 

    if (listaApi.length === 0) {
        const mensagemVazia = document.createElement("h1");
        mensagemVazia.textContent = "A lista está vazia";
        lista.appendChild(mensagemVazia);
    } else {
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento.id, elemento.image, elemento.name, elemento.price));
        });
    };
};

gerarCards();

import { serviceApi } from "./serviceApi.js";

export function buildCard(id, image, name, price) {
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

    card.querySelector(".delete-product-button").addEventListener("click", async () => {
        await serviceApi.deleteCard(id);
        card.remove();

        if (document.querySelector("[data-lista]").children.length === 0) {
            showEmptyMessage();
        }
    });

    return card;
};

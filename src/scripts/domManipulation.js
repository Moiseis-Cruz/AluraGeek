import { serviceApi } from "./serviceApi.js";

// Função para construir um card
export function constroiCard(id, image, name, price) {
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

    // Adiciona o evento de clique ao botão de excluir
    card.querySelector(".delete-product-button").addEventListener("click", async () => {
        await serviceApi.deleteCard(id);
        card.remove();
        
        // Verifica se a lista está vazia após a exclusão (opcional)
        if (document.querySelector("[data-lista]").children.length === 0) {
            mostrarMensagemVazia(); // Exibe mensagem se a lista estiver vazia (se implementado)
        }
    });

    return card;
}
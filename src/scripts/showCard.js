import { serviceApi } from "./serviceApi.js";
import { showEmptyMessage } from "./messages.js";
import { buildCard } from "./domManipulation.js";

const list = document.querySelector("[data-lista]");

async function generateCards() {
    const listApi = await serviceApi.cardsList();
    
    list.innerHTML = ''; 

    if (listApi.length === 0) {
        showEmptyMessage(list);
    } else {
        listApi.forEach(elemento => {
            list.appendChild(buildCard(elemento.id, elemento.image, elemento.name, elemento.price));
        });
    };
};

generateCards();

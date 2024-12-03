import { serviceApi } from "./serviceApi.js";
import { mostrarMensagemVazia } from "./teste.js";
import { constroiCard } from "./domManipulation.js";

const lista = document.querySelector("[data-lista]");

async function gerarCards() {
    const listaApi = await serviceApi.listaCards();
    
    lista.innerHTML = ''; 

    if (listaApi.length === 0) {
        mostrarMensagemVazia(lista);
    } else {
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento.id, elemento.image, elemento.name, elemento.price));
        });
    };
};

gerarCards();

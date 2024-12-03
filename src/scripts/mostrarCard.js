// mostrarCard.js

import { serviceApi } from "./serviceApi.js";
import { mostrarMensagemVazia } from "./teste.js";
import { constroiCard } from "./domManipulation.js";

// Seleção do elemento da lista
const lista = document.querySelector("[data-lista]");

// Função para gerar cards na lista
async function gerarCards() {
    const listaApi = await serviceApi.listaCards();
    
    // Limpa a lista antes de adicionar novos cards
    lista.innerHTML = ''; 

    if (listaApi.length === 0) {
        mostrarMensagemVazia(lista); // Exibe mensagem se a lista estiver vazia
    } else {
        listaApi.forEach(elemento => {
            lista.appendChild(constroiCard(elemento.id, elemento.image, elemento.name, elemento.price));
        });
    }
}

// Gera os cards ao carregar o script
gerarCards();
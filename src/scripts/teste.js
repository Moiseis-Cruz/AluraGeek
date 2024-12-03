// messages.js

// Função para exibir mensagens de erro ou sucesso ao usuário
export function exibirMensagemErro(mensagem) {
    alert(mensagem);
}

// Função para mostrar mensagem quando a lista está vazia
export function mostrarMensagemVazia(lista) {
    const mensagemVazia = document.createElement("h1");
    mensagemVazia.textContent = "A lista está vazia";
    lista.appendChild(mensagemVazia);
}
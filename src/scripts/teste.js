export function exibirMensagemErro(mensagem) {
    alert(mensagem);
};

export function mostrarMensagemVazia(lista) {
    const mensagemVazia = document.createElement("h1");
    mensagemVazia.textContent = "A lista está vazia";
    lista.appendChild(mensagemVazia);
};

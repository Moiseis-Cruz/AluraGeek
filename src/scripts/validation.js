// validation.js

// Função para validar os campos do formulário
export function validarCampos(nameInput, imageInput, priceInput) {
    const nameValue = nameInput.value.trim();
    const imageValue = imageInput.value.trim();
    const priceValue = priceInput.value.trim();

    if (!nameValue || !imageValue || !priceValue) {
        alert("Preencha todos os campos, por favor!"); // Mensagem de erro simples
        return false; // Retorna falso se algum campo estiver vazio
    }

    return { nameValue, imageValue, priceValue }; // Retorna os valores se todos os campos estiverem preenchidos
}
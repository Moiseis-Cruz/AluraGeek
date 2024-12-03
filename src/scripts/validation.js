export function validarCampos(nameInput, imageInput, priceInput) {
    const nameValue = nameInput.value.trim();
    const imageValue = imageInput.value.trim();
    const priceValue = priceInput.value.trim();

    if (!nameValue || !imageValue || !priceValue) {
        alert("Preencha todos os campos, por favor!");
        return false;
    }

    return { nameValue, imageValue, priceValue };
};

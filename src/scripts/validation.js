import { displayErrorMessage } from "./messages.js";

export function validateFields(nameInput, imageInput, priceInput) {
    const nameValue = nameInput.value.trim();
    const imageValue = imageInput.value.trim();
    const priceValue = priceInput.value.trim();

    if (!nameValue || !imageValue || !priceValue) {
        displayErrorMessage("Preencha todos os campos, por favor!");
        return false;
    };

    return { nameValue, imageValue, priceValue };
};

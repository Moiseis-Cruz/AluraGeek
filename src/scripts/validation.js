import { displayErrorMessage } from "./messages.js";
const audioWarning = new Audio("./src/audio/warning.mp3");
const confimation = new Audio("./src/audio/confirm.mp3")

export function validateFields(nameInput, imageInput, priceInput) {
    const nameValue = nameInput.value.trim();
    const imageValue = imageInput.value.trim();
    const priceValue = priceInput.value.trim();

    if (!nameValue || !imageValue || !priceValue) {
        audioWarning.play();
        displayErrorMessage("Preencha todos os campos, por favor!");
        return false;
    };

    confimation.play();

    return { nameValue, imageValue, priceValue };
};

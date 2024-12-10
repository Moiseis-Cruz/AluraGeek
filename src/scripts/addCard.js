import { serviceApi } from "./serviceApi.js";
import { validateFields } from "./validation.js";

const addCardBtn = document.getElementById("add-card-button");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");
const priceInput = document.getElementById("price");
const clearBtn = document.getElementById("clear-button");

async function createCard(event) {
    event.preventDefault();

    const values = validateFields(nameInput, imageInput, priceInput);
    if (!values) return;

    const { nameValue, imageValue, priceValue } = values;

    await serviceApi.addCard(imageValue, nameValue, priceValue);
};

function clearField(event) {
    event.preventDefault();
    nameInput.value = "";
    imageInput.value = "";
    priceInput.value = "";
};

addCardBtn.addEventListener("click", createCard);
clearBtn.addEventListener("click", clearField);

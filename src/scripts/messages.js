export function displayErrorMessage(message) {
    alert(message);
};

export function showEmptyMessage(list) {
    const emptyMessage = document.createElement("h1");
    emptyMessage.textContent = "A lista está vazia";
    list.appendChild(emptyMessage);
};

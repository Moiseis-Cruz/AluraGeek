const formCards = document.querySelector("[data-form]");

function criarVideo(evento){
    evento.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
};

formCards.addEventListener("submit", evento => criarVideo(evento));

async function listaCards() {
    const response = await fetch(`http://localhost:3000/card`);
    const datas = await response.json();
    return datas;
};

async function adicionarCard(image, name, price){
    const response = await fetch(`http://localhost:3000/card`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            image: image,
            name: name,
            price: price
        })
    });
    const datas = await response.json();
    return datas;
};

export const serviceApi = {
    listaCards,
    adicionarCard
};

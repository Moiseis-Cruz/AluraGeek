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

async function deleteCard(id){
    const response = await fetch(`http://localhost:3000/card/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();
    return data;
};

export const serviceApi = {
    listaCards,
    adicionarCard,
    deleteCard
};

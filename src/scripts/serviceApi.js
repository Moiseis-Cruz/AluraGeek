async function listaCards() {
    try {
        const response = await fetch(`http://localhost:3000/card`);
        const datas = await response.json();
        return datas;
    } catch (err) {
        console.log(`Erro ao carregar a lista de produtos: ${err.message}`);
    };
};

async function adicionarCard(image, name, price){
    try {
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
    } catch (err) {
        console.log(`Erro ao tentar solicitar POST: ${err.message}`);
    };
};

async function deleteCard(id){
    try {
        const response = await fetch(`http://localhost:3000/card/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(`Erro ao tentar solicitar DELETE: ${err.message}`);
    };
};

export const serviceApi = {
    listaCards,
    adicionarCard,
    deleteCard
};

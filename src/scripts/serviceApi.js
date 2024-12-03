async function listaCards() {
    const response = await fetch(`http://localhost:3000/card`);
    
    if (!response.ok) {
        throw new Error('Erro ao buscar os cards');
    }

    return response.json();
}

async function adicionarCard(image, name, price) {
    const response = await fetch(`http://localhost:3000/card`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ image, name, price })
    });

    if (!response.ok) {
        throw new Error('Erro ao adicionar o card');
    }

    return response.json();
};

async function deleteCard(id) {
    const response = await fetch(`http://localhost:3000/card/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao excluir o card');
    }

    return response.json();
};

export const serviceApi = {
    listaCards,
    adicionarCard,
    deleteCard,
};

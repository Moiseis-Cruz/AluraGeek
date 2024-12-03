// serviceApi.js

// Função para listar todos os cards
async function listaCards() {
    const response = await fetch(`http://localhost:3000/card`);
    
    if (!response.ok) {
        throw new Error('Erro ao buscar os cards');
    }

    return response.json();
}

// Função para adicionar um novo card
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
}

// Função para excluir um card pelo ID
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
}

// Exporta as funções do serviço API como um objeto
export const serviceApi = {
    listaCards,
    adicionarCard,
    deleteCard,
};
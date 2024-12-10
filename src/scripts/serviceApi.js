async function cardsList() {
    try {
        const response = await fetch(`http://localhost:3000/card`);

        const data = await response.json()

        if (data.erro) {
            throw new Error('Erro ao buscar os cards');
        };

        return data;
    } catch (err) {
        console.log(err);
    };
};

async function addCard(image, name, price) {
    try {
        const response = await fetch(`http://localhost:3000/card`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ image, name, price })
        });

        const data = await response.json();

        if (data.erro) {
            throw new Error('Erro ao adicionar o card');
        };

        return data;

    } catch (err) {
        console.log(err);
    };
};

async function deleteCard(id) {
    try {
        const response = await fetch(`http://localhost:3000/card/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });

        const data = await response.json();

        if (data.erro) {
            throw new Error('Erro ao excluir o card');
        };

        return data;
    } catch (err) {
        console.log(err);
    };
};

export const serviceApi = {
    cardsList,
    addCard,
    deleteCard,
};

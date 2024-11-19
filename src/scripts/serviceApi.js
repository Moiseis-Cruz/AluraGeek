async function listaCards() {
    const response = await fetch(`http://localhost:3000/card`);
    const datas = await response.json();
    return datas;
};

export const serviceApi = {
    listaCards
};

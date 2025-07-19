function validarProduto() {
    const nome = document.getElementById("nome").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const volume = parseInt(document.getElementById("volume").value);
    const categoria = document.getElementById("categoria").value;

    if (nome === "") {
        alert("O nome do produto é obrigatório.");
        return false;
    }

    if (isNaN(preco) || preco <= 0) {
        alert("O preço deve ser um número maior que zero.");
        return false;
    }

    if (isNaN(volume) || volume <= 0) {
        alert("O volume deve ser um número válido.");
        return false;
    }

    if (categoria === "") {
        alert("Selecione uma categoria.");
        return false;
    }

    alert("Produto cadastrado com sucesso!");
    return false; // impedir envio real por enquanto
}

function validarCliente() {
    const nome = document.getElementById("nomeCliente").value.trim();
    const telefone = document.getElementById("telefoneCliente").value.trim();
    const endereco = document.getElementById("enderecoCliente").value.trim();

    const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

    if (nome === "") {
        alert("O nome do cliente é obrigatório.");
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Telefone inválido. Use o formato (99) 99999-9999.");
        return false;
    }

    if (endereco === "") {
        alert("O endereço é obrigatório.");
        return false;
    }

    alert("Cliente cadastrado com sucesso!");
    return false; // impede envio real
}

function validarMotoboy() {
    const nome = document.getElementById("nomeMotoboy").value.trim();
    const telefone = document.getElementById("telefoneMotoboy").value.trim();
    const placa = document.getElementById("placaMoto").value.trim().toUpperCase();

    const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    const placaRegex = /^[A-Z]{3}-\d{4}$/;

    if (nome === "") {
        alert("O nome do motoboy é obrigatório.");
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Telefone inválido. Use o formato (99) 99999-9999.");
        return false;
    }

    if (!placaRegex.test(placa)) {
        alert("Placa inválida. Use o formato ABC-1234.");
        return false;
    }

    alert("Motoboy cadastrado com sucesso!");
    return false;
}

function validarVenda() {
    const produto = document.getElementById("produtoVenda").value.trim();
    const cliente = document.getElementById("clienteVenda").value.trim();
    const motoboy = document.getElementById("motoboyVenda").value.trim();
    const valor = parseFloat(document.getElementById("valorVenda").value);
    const data = document.getElementById("dataVenda").value;

    if (!produto || !cliente || !motoboy) {
        alert("Todos os campos de texto devem ser preenchidos.");
        return false;
    }

    if (isNaN(valor) || valor <= 0) {
        alert("Valor da venda inválido.");
        return false;
    }

    if (!data) {
        alert("Data da venda obrigatória.");
        return false;
    }

    alert("Venda registrada com sucesso!");
    return false;
}




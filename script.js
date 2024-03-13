document.addEventListener("DOMContentLoaded", function() {
    const produtos = {
        "cenoura": 3.99,
        "batata": 9.99,
        "coca-cola": 10.99,
        "Arroz": 5.99,
        "Feijão": 3.99,
        "Macarrão": 2.49,
        "Óleo de Soja": 4.50,
        "Açúcar": 3.29,
        "Café": 8.99,
        "Leite": 2.79,
        "Pão": 3.49,
        "Banana": 1.99,
        "Maçã": 2.49
    };

    const productList = document.getElementById("productList");
    const cartList = document.getElementById("cartList");
    const totalSpan = document.getElementById("total");
    const carrinho = []; // Array para armazenar a lista de compras do usuário

    // Adiciona cada produto à lista de produtos disponíveis
    for (const produto in produtos) {
        const preco = produtos[produto];
        const listItem = document.createElement("div");
        listItem.textContent = `${produto}: R$ ${preco.toFixed(2)}`;
        listItem.classList.add("product-item");
        
        // Adiciona botão de compra para o item
        const buyButton = document.createElement("button");
        buyButton.textContent = "Comprar";
        buyButton.addEventListener("click", function() {
            adicionarAoCarrinho(produto, preco);
        });

        listItem.appendChild(buyButton);
        productList.appendChild(listItem);
    }

    function adicionarAoCarrinho(produto, preco) {
        carrinho.push({ nome: produto, preco: preco }); // Adiciona o objeto produto ao array carrinho
        atualizarCarrinho();
    }

    function removerDoCarrinho(index) {
        carrinho.splice(index, 1); // Remove o item do carrinho pelo índice
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        cartList.innerHTML = ''; // Limpa o conteúdo atual do carrinho

        let totalCompra = 0;

        carrinho.forEach(function(produto, index) {
            const listItem = document.createElement("li");
            listItem.textContent = `${produto.nome}: R$ ${produto.preco.toFixed(2)}`;

            // Adiciona botão de remoção para o item
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", function() {
                removerDoCarrinho(index);
            });

            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);
            totalCompra += produto.preco;
        });

        totalSpan.textContent = totalCompra.toFixed(2);
    }

    function checkout() {
        alert(`Total da compra: R$ ${totalSpan.textContent}`);
        // Aqui você pode adicionar lógica adicional para finalizar a compra, como enviar os dados para um servidor, etc.
    }
});

const products = [
    { name: 'Mouse logitech G203' , code: 'PRD001', category: 'Perifericos', quantity: 25 },
    { name: 'Teclado Mecânico' , code: 'PRD002' , category: 'Perifericos' , quantity: 3 },
    { name: 'Monitor 24 Polegadas' , code: 'PRD003' , category: 'Monitores' , quantity: 12 }
];

const productsTableBody = document.getElementById('products-table-body');

function renderProducts() {
    productsTableBody.innerHTML = "";

    products.forEach(function(product) {

        let status = '';

        if (product.quantity < 5) {
            status = 'Estoque Baixo';
        } else {
             status = 'Disponível';
        }


        const row = document.createElement("tr");

        row.innerHTML = `
         <td>${product.name}</td>
         <td>${product.code}</td>
         <td>${product.category}</td>
         <td>${product.quantity}</td>
         <td>${status}</td>
         <td>Excluir | Editar</td>
        `;
        
        productsTableBody.appendChild(row)

    });
    
}

renderProducts();
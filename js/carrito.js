let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage) || [];  // Manejar el caso en que el almacenamiento esté vacío

let cartContainer = document.getElementById("cart-section");
let totalElement = document.getElementById("cart-total");

function renderCarrito(cartItems) {
    let total = 0;
    cartContainer.innerHTML = "";  // Limpiar el contenedor antes de renderizar
    cartItems.forEach(producto => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.style.maxWidth = "18rem";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio} x ${producto.quantity}</p>
                <p class="card-text">Subtotal: $${producto.precio * producto.quantity}</p>
            </div>
        `;
        cartContainer.appendChild(card);
        total += producto.precio * producto.quantity;
    });
    totalElement.textContent = `$${total}`;
}

renderCarrito(cartStorage);
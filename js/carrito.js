let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let cartContainer = document.getElementById("cart-section");
let totalElement = document.getElementById("cart-total");

function renderCarrito(cartItems) {
    let total = 0;
    cartContainer.innerHTML = "";

    cartItems.forEach((producto, index) => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.style.maxWidth = "18rem";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio} x ${producto.quantity}</p>
                <p class="card-text">Subtotal: $${producto.precio * producto.quantity}</p>
                <button class="btn btn-danger btn-sm eliminarProducto" data-index="${index}">Eliminar</button>
                <input type="number" min="1" value="${producto.quantity}" class="updateQuantity" data-id="${producto.id}" />
            </div>
        `;
        cartContainer.appendChild(card);
        total += producto.precio * producto.quantity;
    });

    totalElement.textContent = `$${total}`;

    document.querySelectorAll(".eliminarProducto").forEach(button => {
        button.addEventListener("click", eliminarProducto);
    });

    document.querySelectorAll(".updateQuantity").forEach(input => {
        input.addEventListener("change", actualizarCantidad);
    });
}

function eliminarProducto(e) {
    const productIndex = e.target.dataset.index;
    cartProducts.splice(productIndex, 1);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    renderCarrito(cartProducts);
}

function actualizarCantidad(e) {
    const productId = e.target.dataset.id;
    const newQuantity = parseInt(e.target.value);

    if (newQuantity > 0 && !isNaN(newQuantity)) {
        const productIndex = cartProducts.findIndex(product => product.id == productId);
        cartProducts[productIndex].quantity = newQuantity;
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        renderCarrito(cartProducts);
    } else {
        alert("Cantidad no válida. Debe ser mayor a 0.");
    }
}

document.getElementById("vaciarCarrito").addEventListener("click", () => {
    cartProducts = [];
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    renderCarrito(cartProducts);
});

document.getElementById("finalizarCompra").addEventListener("click", () => {
    if (cartProducts.length > 0) {
        alert("Compra finalizada. Gracias por su compra.");
        cartProducts = [];
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        renderCarrito(cartProducts);
    } else {
        alert("El carrito está vacío.");
    }
});

renderCarrito(cartProducts);
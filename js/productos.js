let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let productos = [];
let productsContainer = document.getElementById("products-container");


fetch("../db/data.json") 
  .then(response => response.json())
  .then(data => {
    productos = data; 
    renderProductos(productos); 
  })
  .catch(error => console.error("Error al cargar el archivo JSON:", error));

 function renderProductos(productsArray) {
   productsArray.forEach((producto) => {
     const card = document.createElement("div");
    card.className = "card mb-3";
     card.style.maxWidth = "18rem";
     card.innerHTML = `
             <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 150px; object-fit: cover;">
             <div class="card-body">
                 <h5 class="card-title">${producto.nombre}</h5>
                 <p class="card-text">$${producto.precio}</p>
                <input type="number" id="quantity-${producto.id}" min="1" value="1" style="width: 60px;" />
                <button class="btn btn-primary productoAgregar" id="${producto.id}">Agregar</button>
            </div>
         `;
     productsContainer.appendChild(card);
   });
   addToCartButton();
 }

function addToCartButton() {
  const addButton = document.querySelectorAll(".productoAgregar");
  addButton.forEach((button) => {
    button.onclick = (e) => {
      const productId = e.currentTarget.id;
      const quantityInput = document.getElementById(`quantity-${productId}`);
      const quantity = parseInt(quantityInput.value);

      if (quantity > 0 && !isNaN(quantity)) {
        const selectedProduct = productos.find(
          (producto) => producto.id == productId
        );
        const existingProductIndex = cartProducts.findIndex(
          (product) => product.id == productId
        );

        if (existingProductIndex !== -1) {
          cartProducts[existingProductIndex].quantity += quantity;
        } else {
          cartProducts.push({ ...selectedProduct, quantity: quantity });
        }

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
             } 
       
      
    };
  });
}


renderProductos(productos);



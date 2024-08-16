// Declaración de variables y constantes
const carrito = []; // Array para almacenar los productos en el carrito
const preciosLegumbres = {
    lentejas: 1200,
    garbanzos: 900,
    porotos: 1500
};
const preciosSemillas = {
    girasol: 700,
    chia: 900
};

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    let cantidad = prompt("¿Cuántas toneladas desea comprar?");
    cantidad = Number(cantidad);

    // Verificación básica
    if (cantidad <= 0 || cantidad === '') {
        alert("Cantidad no válida.");
    } else {
        let total = precio * cantidad;
        carrito.push({ producto, cantidad, total });
        alert("Cantidad de toneladas agregada al carrito. Total: USD" + total + ".");
    }
}

// Función para ver el contenido del carrito
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let totalCarrito = 0;

        for (let i = 0; i < carrito.length; i++) {
            let item = carrito[i];
            mensaje += item.cantidad + " Tn de " + item.producto + ": USD" + item.total + "\n";
            totalCarrito += item.total;
        }

        mensaje += "Total a pagar: USD" + totalCarrito;
        alert(mensaje);
    }
}

// Función para el menú de legumbres
function menuLegumbres() {
    let opcionLegumbre = prompt("Seleccione una legumbre: \n 1-Lentejas (USD 1200/Tn) \n 2-Garbanzos (USD 900/Tn) \n 3-Porotos (USD 1500/Tn) \n 4-Volver al menú principal");
    opcionLegumbre = Number(opcionLegumbre);

    switch(opcionLegumbre) {
        case 1:
            agregarAlCarrito("Lentejas", preciosLegumbres.lentejas);
            break;
        case 2:
            agregarAlCarrito("Garbanzos", preciosLegumbres.garbanzos);
            break;
        case 3:
            agregarAlCarrito("Porotos", preciosLegumbres.porotos);
            break;
        case 4:
            return;
        default:
            alert("Opción no válida.");
            break;
    }
}

// Función para el menú de semillas
function menuSemillas() {
    let opcionSemilla = prompt("Seleccione una semilla: \n 1-Girasol (USD 700/Tn) \n 2-Chía (USD 900/Tn) \n 3-Volver al menú principal");
    opcionSemilla = Number(opcionSemilla);

    switch(opcionSemilla) {
        case 1:
            agregarAlCarrito("Semillas de Girasol", preciosSemillas.girasol);
            break;
        case 2:
            agregarAlCarrito("Semillas de Chía", preciosSemillas.chia);
            break;
        case 3:
            return;
        default:
            alert("Opción no válida.");
            break;
    }
}

// Función para mostrar el menú principal
function mostrarMenuPrincipal() {
    let menu;
    do {
        menu = prompt("Ingrese una opción: \n 1-Legumbres \n 2-Semillas \n 3-Ver carrito \n 4-Salir");
        menu = Number(menu);

        switch(menu) {
            case 1:
                menuLegumbres();
                break;
            case 2:
                menuSemillas();
                break;
            case 3:
                verCarrito();
                break;
            case 4:
                alert("Muchas gracias, se comunicará un representante para terminar la compra.");
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    } while(menu !== 4);
}


mostrarMenuPrincipal();

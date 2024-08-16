let carrito = [];

function agregarAlCarrito(producto, precio) {
    let cantidad = prompt(`¿Cuántas toneladas de ${producto} desea comprar?`);
    cantidad = Number(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida.");
    } else {
        let total = precio * cantidad;
        carrito.push({ producto, cantidad, total });
        alert(`${cantidad} Tn de ${producto} ha sido agregado al carrito por un total de USD${total}.`);
    }
}

function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let totalCarrito = 0;

        for (let i = 0; i < carrito.length; i++) {
            let item = carrito[i];
            mensaje += `${item.cantidad} kg de ${item.producto}: USD${item.total}\n`;
            totalCarrito += item.total;
        }

        mensaje += `\nTotal a pagar: USD${totalCarrito}`;
        alert(mensaje);
    }
}

function menuLegumbres() {
    let opcionLegumbre = prompt("Seleccione una legumbre: \n 1-Lentejas (USD 1200/Tn) \n 2-Garbanzos (USD 900/Tn) \n 3-Porotos (USD 1500/Tn) \n 4-Volver al menú principal");
    opcionLegumbre = Number(opcionLegumbre);

    switch(opcionLegumbre) {
        case 1:
            agregarAlCarrito("Lentejas", 1200);
            break;
        case 2:
            agregarAlCarrito("Garbanzos", 900);
            break;
        case 3:
            agregarAlCarrito("Porotos", 1500);
            break;
        case 4:
            return;
        default:
            alert("Opción no válida.");
            break;
    }
}

function menuSemillas() {
    let opcionSemilla = prompt("Seleccione una semilla: \n 1-Girasol (USD 700/Tn) \n 2-Chía (USD 900/Tn) \n 3-Volver al menú principal");
    opcionSemilla = Number(opcionSemilla);

    switch(opcionSemilla) {
        case 1:
            agregarAlCarrito("Semillas de Girasol", 700);
            break;
        case 2:
            agregarAlCarrito("Semillas de Chía", 900);
            break;
        case 3:
            return;
        default:
            alert("Opción no válida.");
            break;
    }
}

function mostrarMenuPrincipal() {
    let menu;
    do {
        menu = prompt("Ingrese una opción: \n 1-Legumbres \n 2-Semillas \n 3-Ver carro \n 4-Salir");
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
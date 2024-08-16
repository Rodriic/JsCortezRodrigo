let menu = parseInt(prompt("Ingrese una opción: \n 1-Legumbres \n 2-Semillas \n 3-Ver carro \n 4-Salir"))

while (menu !== 4) {


    switch(menu) {
        case 1:
            console.log("Total de la cuenta: $3000")
            break
        case 2:
            console.log("Limite de extraccion: $1000")
            break
        case 3:
            console.log("Limite de deposito: $500")
            break
        default:
            console.log("Retire su tarjeta")
            break
    }


}

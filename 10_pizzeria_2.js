const ingredientes_pizza = require("./ingredientes_pizza.js");
// console.log(ingredientes);

let masas = [];
let ingredientes = [];

for (let i = 0; i < ingredientes_pizza.length; i++) {
  for (clave in ingredientes_pizza[i]) {
    if (clave == "masa") {
      masas.push(ingredientes_pizza[i]);
    } else if (clave == "ingrediente") {
      ingredientes.push(ingredientes_pizza[i]);
    }
  }
}

// console.log(masas);
// console.log(ingredientes);

// Paso 1 : mostrar el menú de opciones al usuario
if (process.argv.length == 2) {
  let menu = "Pizzeria Nodini\n";
  menu += "*".repeat(menu.length - 1);

  // Mostrar la información de las masas
  menu += "\n\nNuestras masas (elegir una):";
  for (let i = 0; i < masas.length; i++) {
    menu += `\n${i + 1}. ${masas[i].masa} a  ${masas[i].precio.toFixed(2)}€`;
  }
  menu += "\n\nNuestros ingredientes (elegir 4 de la lista):";
  for (let i = 0; i < ingredientes.length; i++) {
    menu += `\n${i + 1}. ${ingredientes[i].ingrediente} a  ${ingredientes[
      i
    ].precio.toFixed(2)}€`;
  }

  console.log("\n", menu, "\n");
  
} else if (process.argv.length == 7) {
  // Has elegido pizza de masa de espelta, con ..., ..., ... y ...
  // Importe total : X€
  const tipoMasa = masas[process.argv[2] - 1];
  if (tipoMasa == undefined) {
    console.log("Error al elegir la masa");
  } else {
    let total = 0
    let mensaje = "Has elegido pizza ";
    mensaje += `${tipoMasa.masa} con `;
    total += tipoMasa.precio
    for (let i = 3; i < process.argv.length - 1; i++) {
        mensaje += `${ingredientes[process.argv[i] -1].ingrediente}, `
        total += ingredientes[process.argv[i] -1].precio
    }
    mensaje += `y ${ingredientes[process.argv[6] -1].ingrediente}`
    total += ingredientes[process.argv[6] -1].precio

    console.log(mensaje, `\nImporte total : ${total.toFixed(2)}€`, "\n\n");
  }
}

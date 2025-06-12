const ingredientes_pizza = require("./ingredientes_pizza.js");
// console.log(ingredientes);

let masas = []
let ingredientes = []

for ( let i = 0; i< ingredientes_pizza.length; i++) {
    for ( clave in ingredientes_pizza[i]) {
        if (clave == "masa") {
            masas.push(ingredientes_pizza[i])
        } else if (clave == "ingrediente") {
            ingredientes.push(ingredientes_pizza[i])
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
    menu += `\n${i + 1}. ${masas[i].masa} a  ${masas[i].precio.toFixed(2)}€`
  }
  menu += "\n\nNuestros ingredientes (elegir 4 de la lista):"
  for (let i = 0; i < ingredientes.length; i++) {
    menu += `\n${i + 1}. ${ingredientes[i].ingrediente} a  ${ingredientes[i].precio.toFixed(2)}€`
  }

  console.log("\n", menu, "\n");
}



const ingredientes = require("./ingredientes_pizza.js")
// console.log(ingredientes);

// Paso 1 : mostrar el menú de opciones al usuario
if (process.argv.length == 2) {

    let menu = "Pizzeria Nodini\n";
  menu += "*".repeat(menu.length -1);

  // Mostrar la información de las masas
  menu += "\nNuestras masas (elegir una):"
for (let i = 0; i < ingredientes.length; i++) {
    if ()
}

  console.log(menu);

}
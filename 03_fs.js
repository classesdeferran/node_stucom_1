const fs = require("node:fs")

// let texto = "En un lugar de la Mancha de cuyo nombre"
// fs.writeFileSync("prueba.txt", texto, "utf-8")

// let append = " no quiero acordarme\n"
// fs.appendFileSync("prueba.txt", append, "utf-8")
// append = "\t\tCervantes\n"
// fs.appendFileSync("prueba.txt", append, "utf-8")

// let prueba = fs.readFileSync("prueba.txt", "utf-8")
// console.log(prueba);

fs.mkdirSync("temp/temp2", {recursive: true})
fs.mkdirSync("temp/temp1", {recursive: true})

// if (fs.existsSync("temp")) {
//     fs.rmdirSync("temp")
//     console.log("Directorio borrado");
// }


// fs.truncateSync("prueba.txt")


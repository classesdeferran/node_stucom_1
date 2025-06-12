/*
TABLA DE MULTIPLICAR
El usuario indicará que número desea para la tabla:
node 04_tabla_multiplicar.js 5
Con eso generaremos esta salida por el terminal:

Tabla de multiplicar del X <- X es el número que ha elegido el usuario
==========================
    1 x 5 = 5
    2 x 5 = 10
    ...
    10 x 5 = 50

*/
const fs = require("node:fs")

const numero = process.argv[2]
const inicio = process.argv[3]
const final = process.argv[4]

let salida = `Tabla de multiplicar del ${numero}\n`
salida += "=".repeat(salida.length -1)
for (let i = inicio; i <= final; i++) {
    salida += `\t\n${i} x ${numero} = ${i * numero}`
}
console.log(salida);

/* Vamos a guardarlo en un fichero: tabla_multiplicar_del_X.txt */
try {
    fs.writeFileSync(`tabla_multiplicar_del_${numero}`, salida, "utf-8")
} catch (error) {
    console.log(error);
}

const os = require("node:os")

console.log("Hay",os.cpus().length, "cpus");
console.log(os.cpus()[0]);
console.log("Memoria disponible", os.freemem()/1024/1024, "Mb");
console.log("Memoria total", os.totalmem()/1024/1024, "Mb");
console.log("Nombre del equipo:", os.hostname());
console.log("Versión del SO:", os.release());
console.log("Info del usuario:", os.userInfo());

import os from "os"; // forma de importar utilizando ESM (EcmaScript Modules). Forma moderna Escribir a mano en package.json "type": "module",
import dns from "dns";
//Crear un programa en NodeJS que imprima por pantalla hola mundo y termine.

console.log("Hello World NodeJS"); // 1

//Añadir a este programa para que pinte el PID y el PPID en el hola mundo.
console.log(`Hello World NodeJS: ${process.pid} ${process.ppid}`);
//El que creo el proceso se le llama Padre y su identificador se le conoce como PPID.

//apuntes
// const os = require('os'); // Una forma de importar, llamada CJS o CommonJS. Forma original de NodeJS

// setInterval(() => console.log(`Intervalo: ${process.pid} ${process.ppid}`), 1000);

//console.log(process.argv); // 2

// process.argv.length === 6 ==> Ejemplo de llamada: node hello.js true 0 hola "{\"demo\": false}"

//console.log(`prioridad: ${os.getPriority()}`);

//Crear un programa en NodeJS que imprima por pantalla la versión del SO, la arquitectura, el nº de CPU's,
//la memoria libre, la ruta del directorio home y la lista de interfaces de red.
// De cada interfaz habrá que pintar nombre, dirección ipV4,  dirección ipv6 y dirección MAC.
//Hint: Toda la información se obtiene del módulo OS de NodeJS. Cuidado con los tipos de datos.

console.log(`version os: ${os.version()}`);
console.log(`arquitectura: ${os.arch()}`);
os.cpus().forEach((e) => console.log(e));
console.log(`memo libre: ${os.freemem()}`);
console.log(`ruta direcc home: ${os.homedir()}`);
console.log(os.networkInterfaces());
console.log(Object.keys(os.networkInterfaces()));

//array de claves del objeto. El forEach a cada clave [v] en corcheste xk stoy accediendo. e, es cda objeto del array
let arr = Object.keys(os.networkInterfaces());
arr.forEach((v) => {
  console.log(
    os.networkInterfaces()[v].forEach((e) => {
      console.log(`name:${v},mac:${e.mac},direccion:${e.family}`);
    })
  );
});

//Crear un programa en NodeJS que solicite la IP versión 4 para el DNS (www.google.com) y la pinte por pantalla.
// Hint: Utilizar el módulo de DNS. Metodo lookup. ¿Es síncrono o asíncrono?

dns.lookup("google.com", (err, address, family) => {
  if (err) throw err;
  console.log("IP de Google:", address);
  console.log("Versión IP:", family); // 4 para IPv4, 6 para IPv6
});

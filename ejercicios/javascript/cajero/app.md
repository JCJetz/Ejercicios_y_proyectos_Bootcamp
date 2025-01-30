# IO

IO significa Input/Output, es decir, entrada/salida.

El SO tiene 3 ficheros que son:
    - Entrada Estandar (**stdin**): Donde se escribe el input del usuario en el ordenador
    - Salida Estandar (**stdout**): Donde el SO escribe la salida de una operación
    - Salida de Error (**stderr**): Donde el SO escribe los errores de un programa

Todas las aplicaciones suelen utilizar estos 3 ficheros, que sa vienen por defecto en el SO.

Ya hemos utilizado la Salida estandar y la Salida de error:

- console.log() --> stdout
- console.error() --> stderr
- throw no capturado --> stderr
- process.exit(1) --> stderr

Para poder acceder a esos archivos tenemos 3 objetos dentro del modulo `process`:

- process.stdout: La salida estandar. Este objeto lo utiliza por dentro el console.log
- process.stdin: La entrada estandar
- process.stderr: La salida de error. Este objeto lo utiliza por dentro el console.error

## ¿En que situación utilizamos la entrada estandar?

La entrada estandar nos da la posibilidad de preguntar al usuario y capturar su respuesta mientras el programa está en ejecución.

¿Como leo la entrada estandar?

Existen varias formas:
[link]https://nodejs.dev/learn
[link]https://nodejs.dev/learn/reading-files-with-nodejs
[link]https://nodejs.dev/learn/writing-files-with-nodejs


1. Utilizando directamente el objeto `process.stdin` [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processstdin)
2. (La que vamos a usar) utilizar un módulo de nodejs llamado `readline` [Doc](https://nodejs.org/dist/latest-v16.x/docs/api/readline.html) 
3. Utilizando otras librerías

[Tutorial Readline](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs)




27 Mayo 2022
## ¿Como se hace testing de stdin?
## demo-io.js
```js
// paso 1: importar readline
import readline from 'readline';

// paso 2: crear el objeto de lectura (el que conecta con el stream(tuberia))
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

// Paso 3: Interactuar con el usuario
const menu = `
    Bienvenido a tu banco NeoBank:
        1. Sacar dinero
        2. Consultar saldo
        3. Retirar dinero
        4. Vaciar cuenta
        5. Salir
    ¿Que opcion quiere realizar? `
// 3.a: Opción de hacer una pregunta y escuchar la respuesta en un callback
rl.question(menu, res => {
    switch(res){
        case '1': console.log('Llamar a la función Sacando dinero...'); break;
        case '2': console.log('Llamar a la función Consultar Saldo...'); break;
        case '3': console.log('Llamar a la función Retirar Dinero...'); break;
        case '4': console.log('Llamar a la función Vaciar Cuenta...'); break; 
        case '5': process.exit(0);
        default: console.log('Operacion no reconocida, vuelva a introducir una opción')
    }
});

// 3.b Otra opción es escuchan el event `line`

// rl.write('Escribo cosas'); Esto añade datos a la ENTRADA DEL USUARIO
console.log('Pregunto al usuario'); // con esta opción el cursos para meter información se encuentra en la siguiente linea
// opción SIN salto de linea
process.stdout.write('Preguntando sin salto de linea');
rl.on('line', input => {
    console.log(`Escuchando evento. Has introducido: ${input}`);
});

## test-io.spec.js

import {printSquare} from './test-io.js';



it('Given a positive number, program should exit printing its square', () => {
    printSquare();
    process.stdin.write('2\n');
    process.stdout.on('data', chunk => console.log(chunk))
})



## test-io.js
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export const printSquare = () => {
    rl.question('Introduzca número:', n => console.log(n**2));
}






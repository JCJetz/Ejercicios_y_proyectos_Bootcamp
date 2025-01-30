# Introducción NodeJS

Nosotros desarrollaremos aplicaciones NodeJS para el sistema operativo

- Proceso:
Un proceso es una aplicación en ejecución. Cualquier cosa que se ejecute en un SO tiene que tener un proceso asociado.

Cuando una aplicación se lanza, el SO le da un identificador de proceso (PID)

Este PID puede crear procesos hijos (Child Process).

El que creo el proceso se le llama Padre y su identificador se le conoce como PPID.

NodeJS tiene un módulo core llamado Process que nos permite gestionar y operar el proceso del SO.

Docu.

¿Como se ejecuta un programa en nodejs?
Necesidades:

archivo con extensión .js
terminal y ejecutar el comando:
node nombre_archivo.js

Podemos pasar parámetros de entrada al programa separando sus valores por espacios.

node nombre_archivo.js param1 param2 ...

Podemos recibirlos en nuestro programa nodeJS utilizando process.argv

Ejemplo:

Otros módulos del Core de NodeJS
os Module
[path Module] => utilidades a gestionar rutas del sistema operativo
[url Module] => utilidades para gestionar una URL
[fs Module] => File System Module, para gestionar el sistema de archivos y directorios del os
[dns Module] => Modulo para la gestión de los DNS ...


## hello.js 25 Mayo 2022



```js
// const os = require('os'); // Una forma de importar, llamada CJS o CommonJS. Forma original de NodeJS
import os from 'os'; // forma de importar utilizando ESM (EcmaScript Modules). Forma moderna
import dns from 'dns/promises';
import fs from 'fs/promises';

console.log('Hello World NodeJS'); // 1

// setInterval(() => console.log(`Intervalo: ${process.pid} ${process.ppid}`), 1000);

console.log(process.argv); // 2

// process.argv.length === 6 ==> Ejemplo de llamada: node hello.js true 0 hola "{\"demo\": false}"

console.log(`prioridad: ${os.getPriority()}`); 


console.log(process.argv.slice(2));

// function determinates if a string is an ip v4 address
// function isIPv4(str) {
//     const ip = str.split('.');
//     if (ip.length !== 4) {
//         return false;
//     }
//     for (let i = 0; i < ip.length; i++) {  
//         if (isNaN(ip[i]) || ip[i] < 0 || ip[i] > 255) {
//             return false;
//         }
//     }
//     return true;
// }

// if(isIPv4(process.argv[2])) {
//     dns.reverse(process.argv[2]).then(console.log);
// }else{
//     dns.lookup(process.argv[2], {all: true})
//     .then(console.log)
// }

export const add = (...numbers) => {
    if(numbers.some(n => typeof n !== 'number')) return NaN;
    return numbers.reduce((acc,v) => acc+v, 0);
}


export const palindrome = str => {
    const processedStr = str.toLowerCase()
                            .replaceAll(' ', '')
                            .replaceAll(/á|à|â|ä/g, 'a')
                            .replaceAll(/ó|ò|ô|ö/g, 'o')
                            .replaceAll(/í|ì|î|ï/g, 'i')
                            .replaceAll(/é|è|ê|ë/g, 'e')
                            .replaceAll(/ú|ù|û|ü/g, 'u');
    const reverseStr = processedStr.split('').reverse().join('');
    return reverseStr === processedStr;
}


export const demoPromise = () => Promise.resolve('Hola');

const FILE_PATH = './hello.txt';

export const writeHelloInFile = async () => {
    await fs.writeFile(FILE_PATH, 'Hello');
}

export const readHelloFromFile = async () => {
    try {
        const d = await fs.readFile(FILE_PATH, { encoding: 'utf-8'});
        return d;
    }catch(err){
        return 'Not Found';
    }
}

export const removeHello = async () => {
    await fs.rm(FILE_PATH);
}

```

# hello.spec.js
```js
import {add, palindrome, demoPromise, writeHelloInFile, readHelloFromFile, removeHello} from './hello.js';

it('Hello world testing with jest', () => {
    // aquí va el código que queremos testar
    // fase 1: preparar el entorno de pruebas
    // fase 2: ejcucion del codigo a testear
    // fase 3: comprobar el resultado   
    expect(1).toBe(1);
});


it('Given two numbers returns its add', () => {
    // fase 1
    const a = 4;
    const b = 44;
    // fase 2
    const result = add(a,b);
    // fase 3
    expect(result).toBe(48);
});

it('Given two negative numbers returns a negative num with its add', () => {
    // fase 1
    const a = -10;
    const b = -11;
    // fase 2
    const r = add(a,b);
    // fase 3
    expect(r).toBeLessThan(0);
    expect(r).toBe(-21);
});

it('Given a not number param should return NaN', () => {
    const a = 'hola';
    const b = 44;
    const r = add(a,b);
    expect(r).toBeNaN();
});

it('Given more than two params should return its add', () => {
    const a=4,b=5,c=10, d=14;
    const r = add(a,b,c,d);
    expect(r).toBe(33);
});

it('Given more than two params and one of them is not a Number should return NaN', () => {
    const a=true,b=5,c=10, d=14;
    const r = add(a,b,c,d);
    expect(r).toBeNaN();
})


it('Given "radar" string should be palidrome', () => {
    const r = palindrome('radar');
    expect(r).toBe(true);
});

it('Given "hola" string should not be palidrome', () => {
    const r = palindrome('hola');
    expect(r).toBe(false);
});


it('Given a palindrome sentence with uppercase an accent should detect the palidrome', () => {
    const r = palindrome('Dábale arroz a la zorra el abad');
    expect(r).toBe(true);
});


it('Example testing async code', async () => {
    // const r = demoPromise();
    // r.then(d => expect(d).toBe('Hola'))
    const d = await demoPromise();
    expect(d).toBe('Hola');
});


describe('Demo File System' , () =>{

    afterEach(async () => {
        // debo eliminar el archivo para asegurarme que no existe 
        try {
            await removeHello()
        }catch(err){}
        
    });

    it('Calling writeHelloInFile it should write "Hello" in the hello.txt file', async () => {
        // fase 2
        await writeHelloInFile();
        // fase 3
        const r = await readHelloFromFile();
        expect(r).toBe('Hello');
    })
    
    it('Reading hello.txt Given a hello.txt file into os fs, "Hello" should be returned', async () => {
        await writeHelloInFile(); // escribo primero para asegurarme que cumplo mi precondicion
        // fase 2
        const r = await readHelloFromFile();
        expect(r).toBe('Hello');
    })
    
    it('Reading hello.txt, When no hello.txt file in os, "Not Found" should be returned', async () => {
        // fase 2
        const r = await readHelloFromFile();
        expect(r).toBe('Not Found');
    })
});




{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "hello.js",
  "type": "module",
  "scripts": {
    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --watch --coverage" //poner esto aquí
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "jest": "^28.1.0"
  }
}


# Ficheros y Directorios 26 Mayo 2022



Los ficheros nos ayudan a almacenar la información dentro de nuestro sistema operativo.

Los directorios nos ayudan a organizar esos ficheros.

- Ficheros:
Un fichero consta de las siguientes propiedades:

nombre: El nombre que le damos al fichero.

extensión: Indica el formato en el que está estructurada la información del fichero. se puede reconocer por el string que hay despues del último punto ('.'). Ejemplo .pdf, .png, .txt, .json, .md El .txt es un texto sin formato, que se conoce como texto plano

ruta o path: El lugar donde se encuentra el fichero dentro del sistema operativo.

datos: Es la información que almacena el fichero.

Owner: Indica el nombre del usuario dueño del archivo

permisos: Indica quien (usuario o usuarios) puede acceder al archivo y operar con el.

NO puede existir dos archivos con el mismo path, nombre y extensión.

- Directorios:
Un directorio nos ayuda a organizar la información. ¿Que propiedades tiene?

nombre: alias de lo que significa el directorio.
path: la ruta donde se encuentra el directorio dentro del SO (sin incluir el nombre)
contenido: Una lista de ficheros y subdirectorios (directorios hijos)
permisos: Indica quien (usuario o usuarios) puede acceder al directorio y operar con el.
directorio padre: Es la carpeta contenedora
No puede existir dos directorios con el mismo path y el mismo nombre

TODOS los directorios tienen directorio padre, menos 1, el llamado directorio raíz

Windows --> C: o D: o G: MacOS --> / Linux --> /

TODAS las rutas globales empiezan por el directorio raíz

Existen dos rutas de directorios especiales . y ..

. -> Representa el directorio actual, nosotros mismo como directorios. .. -> Representa el directorio padre.

Todas las rutas que empiezan por . o .. son rutas relativas

- Permisos:
Tienen 3 bloques de tipos de usuario y a cada bloque se le especifica 3 posibles operaciones que se pueden o no realizar por ese tipo de usuario.

Los grupos de usuarios son:

Owner
Grupo del directorio
El resto de usuarios
Para cada grupo hay que especificar, en este orden:

Lectura (r)
Escritura (w)
Ejecución (x)
USR GRP OTHER rwx rwx rwx 101 001 010

¿Que pasa si soy el creador del archivo y ejecuto un programa NodeJS que tiene fs.writeFile en un archivo que tiene los permisos de arriba?

NodeJS lanza un excepcion que no tienes permisos

¿Que pasa si soy un usuario que no es el owner ni pertenece al grupo y ejecuto un programa NodeJS que tiene fs.writeFile en un archivo que tiene los permisos de arriba?

Puedo escribir perfectamente.

¿Como se representan los permisos para una fácil lectura?
Los permisos se representan en base Octal, por cada tipo de usuario

000 --> 0 001 --> 1 010 --> 2 011 --> 3 100 --> 4 101 --> 5 110 --> 6 111 --> 7

Tenien el siguiente juego de permisos

USR GRP OTHER rwx rwx rwx 101 001 010

¿Cual sería su representación octal?

0o512

Dada esta representación en octal: 0o743 + 0o100 = 0o1043. ¿Cual es su reprentacion en binario?

USR GRP OTHER rwx rwx rwx 111 100 011


********  dir.spec.js  *********

import { fileLS } from "./dir";
import fs from 'fs/promises';

const FOLDER_PATH = './test';
const NON_EXIST_FOLDER_PATH = './not_exist_92839481';

const createTestFolder = async () => await fs.mkdir(FOLDER_PATH);

const addFilesToTestFolder = async n => {
    /* Junio Version */
    /*
        for(let i=1; i<=n; i++){
            await fs.writeFile(`${FOLDER_PATH}/test_file_${i}.txt`, '');
        }
    */

    /* SENIOR VERSION */
    // devolvemos un array de promesas
    const filesPromises = Array(n)
                            .fill(0)
                            .map(async (_v,i) => await fs.writeFile(`${FOLDER_PATH}/test_file_${i+1}.txt`, ''));
    await Promise.allSettled(filesPromises); // esperamos todas las promesas a la vez
}

const addDirToTestFolder = async () => await fs.mkdir(`${FOLDER_PATH}/test_folder`);

const cleanTest = async () => await fs.rm(FOLDER_PATH, { recursive: true, force: true });

beforeEach(() => createTestFolder()); // antes de cada test preparo el test folder

afterEach(() => cleanTest()); // despues de cada test elimino la carpeta de pruebas

it('Given an existing directory with child files, it should return its files list',async () => {
    // fase 1
    await addFilesToTestFolder(3);
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual(['test_file_1.txt','test_file_2.txt', 'test_file_3.txt']);
});

it('Given a non existing directory, it should throw a NON EXISTING exception', async () => {
    //fase 2
    await expect(async () => await fileLS(NON_EXIST_FOLDER_PATH))
           .rejects
           .toThrowError(new Error('NON EXISTING'));
});

it('Given an empty directory, it should return an empty list', async () => {
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual([]);
});

it('Given a directory with child files and directories, it should return only the list of files', async () => {
    // fase 1
    await addFilesToTestFolder(2);
    await addDirToTestFolder();
    // fase 2
    const r = await fileLS(FOLDER_PATH);
    // fase 3
    expect(r).toEqual(['test_file_1.txt','test_file_2.txt']);
});

it('Given a file, it should return a NO DIRECTORY exception',async () => {
    // fase 1
    await addFilesToTestFolder(1);
    // fase 2 y 3
    await expect(async() => await fileLS(`${FOLDER_PATH}/test_file_1.txt`))
            .rejects
            .toThrowError(new Error('NO DIRECTORY'))
});


***** dir.js ******
import fs from 'fs/promises';

export const fileLS = async path => {
    try {
        const files = await fs.readdir(path, {withFileTypes: true});
        // devolvemos un array de SOLO archivos (filter) y SOLO su nombre (map)
        return files.filter(f => f.isFile()).map(f => f.name);
    } catch (err) {
        // distinguimos los casos del error
        switch(err.code){
            case 'ENOENT': throw new Error('NON EXISTING');
            case 'ENOTDIR': throw new Error('NO DIRECTORY');
            default: throw new Error('GENERIC EXCEPTION');
        }
    }
}


```
# Testing

Poner una porcion de código o una aplicación a prueba. Comprobar si nuestra aplicación realiza lo que dice que hace., es decir, cumple con lo que se espera de ella.

- **Testing Manual**: Una persona la encargada de ejecutar la prueba.
- **Testing automático**: Un código que prueba otro código

Nosotros vamos a aprender el Testing automático.

Dentro del testing automático hay muchisimos tipos de test:

- **Testing unitario**: prueba los elementos más básicos de una aplicación, es decir, las funciones.
- **Testing Componentes**: Esta prueba es para los componentes UI, por ejemplo un componente de react. Es como un test unitario para componentes con DOM.
- **Testing integrado**: prueba partes completas de nuestra aplicación, integradas. En el caso de front no incluiría el backend. No entra la integración con otros sistemas. Por ejemplo podemos probar una página con varios componentes
- **Testing e2e**: prueba de la aplicación con todos los sistemas reales, es decir, integrados. Aqui probaríamos un flujo completo de la aplicación que incluye operaciones con la BBDD real.
- **Testing Seguridad**: Nos permite probar cuanto de seguro es nuestra aplicación
- **Testing de performance**: Nos permite probar lo rápido o lento que va nuestra aplicación
- **Testing de escalado**: Nos permite probar como la aplicación reacciona cuando hay muchos usuarios en ella.
- **Testing visual**: Nos permite validar la diferencia de pixeles entre una version del código y otra
- ...

## ¿Para qué sirve el testing y porqué es importante?

- Ahorra mucho tiempo
- Ahorra mucho dinero
- Te hace mejor desarrollador/a
- Te permite anticipar los bugs y sobre todo lo que se conocen como hidden bugs
- Te permite probar casos extremos facilmente
- Hace que una aplicación sea más escalable (que crezca mejor)
- Te permite dormir mejor

## Testing unitario automático

Consiste en probar la unidad más indivisible de una aplicación. NO es la instrucción de código, sino la `función`.

El testing unitario consiste en ejecutar la función dando valor a los parámetros de entrada y esperar que para esos parámetros se devuelve cierta salida concreta.

Para cada archivo de código crearemos un archivo asociado llamado `_nombre_.spec.js` siendo _nombre_ el nombre del archivo original.

Si quiero probar un archivo que se llama `hello.js` crearé otro archivo que se llama `hello.spec.js`.

### ¿Como se estructura el archivo de test?

El archivo estará dividido en casos de prueba (que tendremos que definir como desarrolladores)

Un caso de prueba se especifica con una función llamada `it` que acepta dos parámetros:

1. string, describe el caso de prueba
2. function, el código del caso de prueba. Este código tendrá la preparación de los valores de la función que hay que probar, la llamada a la función y los `expect` para validar el resultado

** En algunas librerías tambien se puede llamara `test` a la función.

Es posible también organizar varios `it` en un mismo grupo. Para ello envuelvo los `it` en una función `describe`.
Acepta dos parámetros

1. string, describe el grupo de casos de prueba
2. función, donde voy a pegar todos los it

Además existen 4 funciones especiales:

- beforeAll: Es una función que se ejecuta ANTES de todos los casos de prueba. Solo se ejecuta una vez
- beforeEach: Es una función que se ejecuta ANTES de CADA caso de prueba. Se ejecuta tantas veces como `it` tenga
- afterEach: igual que beforeEach pero DESPUES
- afterAll: igual que beforeAll pero DESPUES

## ¿Que librería ne ayuda a hacer testing?

Necesitamos dos tipos de librerías:

- La que nos ayuda a construir los test: `Test Framework`
- La que nos ayuda a ejecutar los test: `Test Runner`

Angular utiliza `Jasmine` como test framework y `Karma` como test Runner
Otro tándem conocido serían `Chai` y `Mocha`

Nosotros en clase vamos a utilizar UNA librería que tiene todo llamada `Jest`

[Documentacion](https://jestjs.io/es-ES/)
[Instalación](https://jestjs.io/es-ES/docs/getting-started)

## User Jest con ESM

Por ahora Jest solo funciona con CJS. Para poder tener compatibilidad con ESM hay que hacer los siguientes pasos.

1. Instalar una librería de variables de entorno:
    > npm i -D cross-env

2. Cambiar el script de test en el package.json a lo siguiente:

    ```json
        "scripts": {
            "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --watch --coverage"
        }

    ```
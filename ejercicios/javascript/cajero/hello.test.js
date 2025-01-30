//import {hello} from './hello.test'
import {escribirArchivo, helloWorld} from './hello';
import {add} from './hello';
import {crearArchivo} from  './hello';
import {leerArchivo} from './hello';
import {borrarArchivo} from './hello';

//1. Prepara el entorno para hacer testing y crea una funcion en testing que devuelva un hola mundo.

it('Hello Mundo testing with jest', () => {
    // aquí va el código que queremos testar
    // fase 1: preparar el entorno de pruebas
    // fase 2: ejcucion del codigo a testear
    // fase 3: comprobar el resultado   
    expect(helloWorld()).toBe('Hello World');
});

//2. Crea una funcion que reciba dos números y devuelva su suma, esta funcion debera estas testeada. (nombre.test.js)

it('sumo 2 + 4 = 6', () => {
    // fase 1
    const a = 2;
    const b = 4;
    // fase 2
    const result = add(a,b);
    // fase 3
    expect(result).toBe(6);
});

//3. Crea una funcion que cree un archivo vacío con el nombre hello.json y hazle un test para ver si funciona.

it('function creates an empty file with the name hello.json', async () => {
    await crearArchivo('hello.json')   
    expect(await leerArchivo('hello.json')).not.toBe(`Got an error trying to read the file`)
})


/*4. Crea una funcion que escriba en un archivo hello.json los datos ({"name":"hello-world-nodejs","version":"1.0.0"} ). Construir 1 solo caso de prueba:
Al ejecutar la función el contenido del archivo debe ser igual a {"name":"hello-world-nodejs","version":"1.0.0"}  . hint: Tengo que crear una función que lea el archivo para comprobar que tiene ese valor.
Si ejecutamos la función dos veces, el contenido del archivo debe ser  `{"name":"hello-world-nodejs","version":"1.0.0"}`
*/
it('adds an entry to the json file', async () =>{

    await escribirArchivo("hello.json",{"name":"hello-world-nodejs","version":"1.0.0"})
    let contenido = await leerArchivo('hello.json')
    expect(contenido).toBe('{"name":"hello-world-nodejs","version":"1.0.0"}')
})


/*
5. Crear una funcion que borre el archivo hello.json, y hacer test para ver si funciona. Tiene que tener dos casos de prueba:
Si el archivo está creado y se borra, al leerlo no debe devolver datos
Si el archivo no está creado y se borra, no debe lanzar excepción
Hint: Para probar el borrado, necesitaremos la función de lectura y la función de escritura del ejercicio 4 (editado) 


*/
it('deletes the file requested', async () =>{
    await borrarArchivo('hello.json')
    expect(await leerArchivo('hello.json')).toBe(`Got an error trying to read the file`)
})



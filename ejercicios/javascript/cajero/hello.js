//  Import funciones de archivo para ejercicio 3
import { promises as fs } from 'fs';


//1. Prepara el entorno para hacer testing y crea una funcion en testing que devuelva un hola mundo.

export const helloWorld = () => {
    return "Hello World";
}

//2. Crea una funcion que reciba dos números y devuelva su suma, esta funcion debera estas testeada. (nombre.test.js)
    
export const add = (a,b) => {
    return a + b;
} 

//3. Crea una funcion que cree un archivo vacío con el nombre hello.json y hazle un test para ver si funciona.

export const crearArchivo = async (nombre) => {
    
    await fs.writeFile(nombre, '', function (err) {
        if (err) throw err;
    });

    // No funciona en Node
    //return new File([""], "hello.json", {type: "application/json"});
}

// prueba de las funciones
//crearArchivoJson('prueba.txt');

export const leerArchivo = async (filePath) => {
    try {
      const data = await fs.readFile(filePath,"utf8");
      //devuelve esto si el archivo existe
      return data;
    } catch (error) {
      return `Got an error trying to read the file`;
    }
}

//console.log(leerArchivo('prueba.txt'));

/*
4. Crea una funcion que escriba en un archivo hello.json los datos ({"name":"hello-world-nodejs","version":"1.0.0"} ). Construir 1 solo caso de prueba:
Al ejecutar la función el contenido del archivo debe ser igual a {"name":"hello-world-nodejs","version":"1.0.0"}  . hint: Tengo que crear una función que lea el archivo para comprobar que tiene ese valor.
Si ejecutamos la función dos veces, el contenido del archivo debe ser  `{"name":"hello-world-nodejs","version":"1.0.0"}`
*/



//recibe archivo que es la ruta y objeto con los datos a escribir
// (solo escribe si está vacio)
export const escribirArchivo = async (archivo,objeto) => {
    //convierto objeto a string para poder pasarlo al método writeFile éste requiere texto no objeto como input
    let data = JSON.stringify(objeto);
    //console.log('data input: ', data);
    // abro el archivo para ver si esta vacio (length === 0)
    const d = await fs.readFile(archivo);
    //console.log('data length: ', d.length)
    if (d.length === 0) {
        //flag que escribe si no existe
        const d2 = await fs.writeFile(archivo, data, { flag: "a+" }, (err) => {
            if (err) throw err;
        });
        //console.log(`Data added: ${d2}`);
    } else {
        console.log("no está vacio")
    }
}
// el 5.
export const borrarArchivo = async (archivo) => {
    try {
        const borrar = await fs.unlink(archivo);
        console.log(borrar);
    } catch (error) {
        console.log(error);
    }
    
}

//let f = await leerArchivo("hello.json");
//console.log(f);

//borrarArchivo('hello.json')

/*
5. Crear una funcion que borre el archivo hello.json, y hacer test para ver si funciona. Tiene que tener dos casos de prueba:
Si el archivo está creado y se borra, al leerlo no debe devolver datos
Si el archivo no está creado y se borra, no debe lanzar excepción
Hint: Para probar el borrado, necesitaremos la función de lectura y la función de escritura del ejercicio 4 (editado) 
*/


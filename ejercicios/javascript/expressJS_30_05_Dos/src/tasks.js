import { createECDH } from 'crypto';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

//const array = task.json.length;

//2 - Crear una función que compruebe si el archivo tasks.json existe, de lo contrario inicializarlo con un array vacío ([]).
//3 - Otra función que, después de ejecutar la anterior (y await), obtiene el contenido de tasks.json 
//(array de objetos, igual que el del kanban) y lo devuelve por return.


// archivo a utilizar
const file = 'tasks.json';

// función que lee contenido y si archivo no existe, llama función para crearlo
export const leerCreaArchivo = async () => {

    try {
        // readFile 
        const data = await fs.readFile(file);
        // parsear a JSON (archivo se lee como string)
        const parseddata = JSON.parse(data);
        console.log("Existe.\nRetornando data:", parseddata);
        // devuelve el contenido, si tiene
        return parseddata;
    
    // catch si el archivo no existe (error al abrirlo con readfile)
    } catch (err)  {

        console.log("No existe. Creando archivo.");   
        // ejecuta función de creado 
        crearArchivo();    

    }

};

// función para crear archivo
export const crearArchivo = async () => {
    // file sigue siendo 'tasks.json', [] el contenido. 
    // Callback raro o no iba el console.log
    return await new Promise((resolve, reject) => {
        fs.writeFile(file, "[]",(err, data) => {
            console.log('Archivo tasks.json creado:', data);
            //return data;
            resolve();
        });
    });
    // devuelve contenido '[]'
};

/* 
3 - Otra función que después de objeter el contenido (array vacío o array de objetos) 
ejecutando la anterior, añada tareas al archivo: 
({title: "titulo de la tarea", description: "descripción", isCompleted boolean}) 
[añade nuevo objeto a array de objetos] --> lo hice en app cajero aunque no había array antes del objeto
*/


// añadirTarea recibe info de la task a crear por params
export const añadirTarea = async (title,description,isCompleted) => {

    const newtask = {id:uuidv4(),title:title,description:description,isCompleted:isCompleted};
    // funcion crear/leer (no va bien del todo, debería estar todo lo demàs en el callback o then de esta?)
    leerCreaArchivo().then((data) => {
        //const data = await leerCreaArchivo();
        //const dataparsed = JSON.parse(data);
        //console.log(data);
        //console.log(data[1].isCompleted);
        //console.log(typeof data);
        data.push(newtask);
        let stringifieddata = JSON.stringify(data);
        //console.log(JSON.stringify(obj, null, 2))
        fs.writeFile(file, stringifieddata).then((newdata) => {
            console.log('Añadida tarea:', data.at(-1));
            //console.log('Entradas: ', data.length);
            return newdata;
        });
    });

};

export const borrarTarea = async (idtarea) => {
    
    leerCreaArchivo().then((data) => {

        var result = data.map(item => item.id).indexOf(idtarea);
        data.splice(result,1);
        let stringifieddata = JSON.stringify(data);
        //console.log(data);
        fs.writeFile(file, stringifieddata).then((newdata) => {
            console.log('Eliminada tarea con ID:', idtarea);
            //console.log('Entradas: ', data.length);
            return newdata;
        });

    });
}

//añadirTarea("Task 1","desc task 1","false");
//leerCreaArchivo();
//borrarTarea('b821ce8d-f669-4d5b-b1e0-001455d8e8a6');














//console.log(leerArchivo('prueba.txt'));

//function isJson($string) { json_decode($string); return (json_last_error() == JSON_ERROR_NONE); }



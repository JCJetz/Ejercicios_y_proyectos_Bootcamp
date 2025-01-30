
Inicializar el proyectoor e instalar Jest:
0. npm init
   npm i -D jest

1. Instalar una librería de variables de entorno:
    > npm i -D cross-env

2. Cambiar el script de test en el package.json a lo siguiente:

    ```json
        "scripts": {
            "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --watch --coverage"
        }

  
# Estructura de mi proyecto

cajero.js: Lógica principal
saldo.json: Almacenamiento de datoos
banco2.js:Interfaz de línea de comandos
test/: Directorio de pruebas  ```

3. npm test para ir comprobando   



## ejercicios 05/25 y 26 /2022

1. Prepara el entorno para hacer testing y crea una funcion en testing que devuelva un hola mundo.
2. Crea una funcion que reciba dos números y devuelva su suma, esta funcion debera estas testeada.
3. Crea una funcion que cree un archivo vacío con el nombre hello.json y hazle un test para ver si funciona.
gi

4. Crea una funcion que escriba en un archivo hello.json los datos ({"name":"hello-world-nodejs","version":"1.0.0"} ). Construir 1 solo caso de prueba:
Al ejecutar la función el contenido del archivo debe ser igual a {"name":"hello-world-nodejs","version":"1.0.0"}  
Hint: Tengo que crear una función que lea el archivo para comprobar que tiene ese valor.
Si ejecutamos la función dos veces, el contenido del archivo debe ser  
`{"name":"hello-world-nodejs","version":"1.0.0"}`


5. Crear una funcion que borre el archivo hello.json, y hacer test para ver si funciona. Tiene que tener dos casos de prueba:

Si el archivo está creado y se borra, al leerlo no debe devolver datos.
Si el archivo no está creado y se borra, no debe lanzar excepción.
Hint: Para probar el borrado, necesitaremos la función de lectura y la función de escritura del ejercicio 4 (editado) 


```js



 ejercicios 26 Mayo  
 Saldo.js, cajero.json, index.js,  pruebas.js

Vamos a crear una app de cajero de banco, que nos va a permitir hacer la siguientes funcionalidades: 
podremos revisar nuestro estado de cuenta, 
agregar dinero, 
retirar dinero y 
limpiar nuestro saldo. 
Todos estos datos debemos pasarlo por parámetros (process.argv.slice(2)), nuestro saldo inicial deberá estar en un archivo aparte y el monto será de 0 en caso de que no exista el archivo, nuestras funciones deberán estar en otro archivos .js y  deberán ser importadas en un index.js, donde serán parte de un switch case dependiendo de lo q intrduzca el usuario deberá llevarte a una funcion u otra, las funciones seran las siguientes:

- Si el  usuario introduce por parametro la palabra (get), la funcion deberá mostrar por consola el saldo actual, esta funcion debera estar testeada con sus casos de prueba.
- Si el  usuario introduce por parametro la palabra (deposit) y como segundo parámetro un número, la función deberá agregar esa cantidad a tu saldo actual, esta función debera estar testeada con sus casos de prueba.
- Si el usuario introduce por parametro la palabra (withdraw) y como segundo parametro un numero,la función deberá restar esa cantidad a tu saldo actual, esta función debera estar testeada con sus casos de prueba.
- Si el usuario introduce por parametro la palabra (clean), la función deberá eliminar todo tu saldo actual, esta función debera estar testeada con sus casos de prueba.
import { argv } from 'process';

/*

27 Mayo Profe 


7. Tras hacer la aplicación del banco utilizando argumento de programa, debemos construir la aplicación utilizando stdin. 
Aparecerá un menú con el siguiente mensaje:

Bienvenido a tu banco NeoBank:
        1. Sacar dinero
        2. Consultar saldo
        3. Retirar dinero
        4. Vaciar cuenta
        5. Salir
    ¿Que opcion quiere realizar?
El usuario podrá elegir la opción y se le mostrará el resultado por pantalla el resultado y a continuación el menú 
de nuevo para que el usuario pueda elegir otra opción.
Para las operaciones 1 y 3 se necesita hacer al usuario otra pregunta indicando la cantidad y despues ya realizar la operación.


arranca la app y entran argumentos con process.loqsea
cambio dnd pregunto al usuario y 
funct banco  

funcion  banco.js get 
corro node banco.js get
/*
Por si un día necesito un servidor, ahora lo saco por consola
import http from 'http';
import fs from 'fs';
//var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8001);*/



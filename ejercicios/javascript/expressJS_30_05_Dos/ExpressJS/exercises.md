```js


fetch('http://localhost:4563/example-headers')
  .then(r => {
      console.log(r.headers)
      console.log('Esto es el valor de la header (x-custom-header): ' + r.headers.get('x-custom-header'));
      return r.text();
  })
  .then(d => console.log(d))



fetch('http://localhost:4563/example-post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // importante para indicarle al servidor que le viene un JSON (mimetype)
    },
    body: JSON.stringify({ cliente: 'Soy yooooooo'})
})
  .then(r => r.text())
  .then(d => console.log(d))






30 de Mayo Ejercicio dos:


# Para empezar:
npm init
npm install express
npm install -g nodemon
npm run dev
poner "type": "module", en package.json
y  "dev": "nodemon --watch src src/app.js"
  "main": "server.js", // como llame a mi app.js




En la siguiente URL tenéis el API de donde obtener los queryParams http://expressjs.com/en/4x/api.html#req.query  y un tutorial de como manejarlos (https://flaviocopes.com/express-get-query-variables/) 


Ejercicio Dos:

4. Backend funcional con persistencia. 
Vamos a crear ya un backend en condiciones que almacene la información en un archivo. 
La aplicación que crearemos es para guardar una lista de tareas.
Una task es una entidad que tiene los siguientes atributos:
- title: string que representa el título de la tarea
- description: string que contiene la descripción de la tarea
- isCompleted: boolean que indica si la tarea se ha completado o no
Para ello:
Crear una aplicación nodeJS que al iniciarse compruebe que existe el archivo tasks.json. Si no existe lo crea con un array vacio. Si existe lo deja como está.

Ahora vamos a añadile el servidor http. Para ello levantar un servidor expressJS  en la aplicación anterior, que tenga dos rutas en el path (/tasks):
- GET: Devuelve la lista que haya en el archivo tasks.json
- POST: Añade una nueva task al final de la lista, actualizando el archivo tasks.json.
Cuando lo probemos, veremos que al crear el una task usando el método POST. Si todo ha ido bien, el hacer el GET tiene que verse en la lista de tareas.

Ahora modificaremos el método POST para que genere una propiedad id única que se guarde junto con lo que metió el usuario. Cuando hagamos el GET  debe venirnos el id como atributo de las tasks. Para generar un id único podemos utilizar lo que se conoce como uuid. Os paso una librería que podéis instalar y utilizar para generar el id aleatoriamente. https://www.npmjs.com/package/uuid

EDITADO AL DIA SIGUIENTE

4. Backend funcional con persistencia. Vamos a crear ya un backend en condiciones que almacene la información en un archivo. La aplicación que crearemos es para guardar una lista de tareas.
Una task es una entidad que tiene los siguientes atributos:
title: string que representa el título de la tarea
description: string que contiene la descripción de la tarea
isCompleted: boolean que indica si la tarea se ha completado o no
Para ello:
Crear una aplicación nodeJS que al iniciarse compruebe que existe el archivo tasks.json. Si no existe lo crea con un array vacio. Si existe lo deja como está.
Ahora vamos a añadile el servidor http. Para ello levantar un servidor expressJS  en la aplicación anterior, que tenga dos rutas en el path (/tasks):
GET: Devuelve la lista que haya en el archivo tasks.json
POST: Añade una nueva task al final de la lista, actualizando el archivo tasks.json.
Cuando lo probemos, veremos que al crear el una task usando el método POST. Si todo ha ido bien, el hacer el GET tiene que verse en la lista de tareas.
Ahora modificaremos el método POST para que genere una propiedad id única que se guarde junto con lo que metió el usuario. Cuando hagamos el GET  debe venirnos el id como atributo de las tasks. Para generar un id único podemos utilizar lo que se conoce como uuid. Os paso una librería que podéis instalar y utilizar para generar el id aleatoriamente. https://www.npmjs.com/package/uuid
Una vez que tenemos estos dos métodos vamos a construir endpoints que nos ayuden a trabajar con elementos concretos de la lista de tareas.
Para ello vamos a crear los siguientes endpoints en el path /tasks/:id :
GET: Devuelve la información de la tarea cuyo id sea el de la URL
DELETE: Borra la tarea cuyo id sea el de la URL del sistema totalmente

PATCH: Actualiza parcialmente una tarea cuyo id sea el de la URL. Tened en cuenta que el id NO se puede actualizar y que el body puede tener atributos no informados por parte del cliente. Pista: Utilizar el operador spread para poder hacer el merge de dos objetos.
En todos los casos si la tarea no existe, se debe devolver un 404 con un JSON  { "error": "La tarea ${id} no existe" }
Todo esto debería tener testing utilizando supertest. Lo primero sería definir los casos de prueba y sus it's y luego implementar los casos de prueba. (editado) 
---
Alex González  12:57
4. Backend funcional con persistencia. Vamos a crear ya un backend en condiciones que almacene la información en un archivo. La aplicación que crearemos es para guardar una lista de tareas.
Una task es una entidad que tiene los siguientes atributos:
title: string que representa el título de la tarea
description: string que contiene la descripción de la tarea
isCompleted: boolean que indica si la tarea se ha completado o no
Para ello:
Crear una aplicación nodeJS que al iniciarse compruebe que existe el archivo tasks.json. Si no existe lo crea con un array vacio. Si existe lo deja como está.
Ahora vamos a añadile el servidor http. Para ello levantar un servidor expressJS  en la aplicación anterior, que tenga dos rutas en el path (/tasks):
GET: Devuelve la lista que haya en el archivo tasks.json
POST: Añade una nueva task al final de la lista, actualizando el archivo tasks.json.
Cuando lo probemos, veremos que al crear el una task usando el método POST. Si todo ha ido bien, el hacer el GET tiene que verse en la lista de tareas.
Ahora modificaremos el método POST para que genere una propiedad id única que se guarde junto con lo que metió el usuario. Cuando hagamos el GET  debe venirnos el id como atributo de las tasks. Para generar un id único podemos utilizar lo que se conoce como uuid. Os paso una librería que podéis instalar y utilizar para generar el id aleatoriamente. https://www.npmjs.com/package/uuid
Una vez que tenemos estos dos métodos vamos a construir endpoints que nos ayuden a trabajar con elementos concretos de la lista de tareas.
Para ello vamos a crear los siguientes endpoints en el path /tasks/:id :
GET: Devuelve la información de la tarea cuyo id sea el de la URL
DELETE: Borra la tarea cuyo id sea el de la URL del sistema totalmente
PATCH: Actualiza parcialmente una tarea cuyo id sea el de la URL. Tened en cuenta que el id NO se puede actualizar y que el body puede tener atributos no informados por parte del cliente. Pista: Utilizar el operador spread para poder hacer el merge de dos objetos.
En todos los casos si la tarea no existe, se debe devolver un 404 con un JSON  { "error": "La tarea ${id} no existe" }
Todo esto debería tener testing utilizando supertest. Lo primero sería definir los casos de prueba y sus it's y luego implementar los casos de prueba. (editado) 
----
1 - Crear una nueva app node con express y nodemon --> esto está en esta misma app
-- todas las funciones son async --

2 - Crear una función que compruebe si el archivo tasks.json existe, de lo contrario inicializarlo con un array vacío ([]).

3 - Otra función que, después de ejecutar la anterior (y await), obtiene el contenido de tasks.json (array de objetos, igual que el del kanban) y lo devuelve por return.

3 - Otra función que , después de objeter el contenido (array vacío o array de objetos) ejecutando la anterior, añada tareas al archivo ({title: "titulo de la tarea", description: "descripción", isCompleted boolean}) [añade nuevo objeto a array de objetos] --> esto está en app cajero aunque no había array antes del objeto

    La función deberá recibir (title,description,isCompleted) como paramentros

4 - Crear ruta '/tasks' (igual que '/demo-methods' en esta app), con:
    
    * Un GET que ejecute la función del punto 2 para obtener el contenido de tasks.json y lo devuelva.

    * Un POST que ejecute la función del punto 3 y le pasa los params sacándolos del query

        (primero hacer prueba básica de query, cuando sabes que tienes los querys, los metes a la función)









[{title: "titulo de la tarea", description: "descripción", isCompleted boolean},
{title: "titulo de otra tarea", description: "descripción tarea 2..", isCompleted boolean}]
```js


fetch('http://localhost:4563/example-headers')
  .then(r => {
      console.log(r.headers)
      console.log('Esto es el valor de la header (x-custom-header): ' + r.headers.get('x-custom-header'));
      return r.text();
  })
  .then(d => console.log(d))


Alex González  12:08
fetch('http://localhost:4563/example-post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // importante para indicarle al servidor que le viene un JSON (mimetype)
    },
    body: JSON.stringify({ cliente: 'Soy yooooooo'})
})
  .then(r => r.text())
  .then(d => console.log(d))


Alex González  12:20
Hello world express. Crear un servidor HTTP con expressJS  que tenga una ruta get en el path /hello que devuelve el texto Hello World. 
Probarlo con postman. Podéis seguir los tutoriales de los apuntes
Configurar el refresco automático. Ahora mismo cada cambio que hacemos en el servidor hay que pararlo y volverlo a levantar. Vamos a configurar una herramienta para que se auto-refresce el servido con los cambios. Como un live server pero para nodeJS. La herramienta se llama nodemon. En el servidor del ejercicio 1 instalar y configurar nodemon. https://www.npmjs.com/package/nodemon. Probar a realizar cambios en el texto que devuelve /hello y ver como se auto-refresca.
Si elegís la instalación de dev (dentro del proyecto) necesitas poner npx delante del comando nodemon, ya que sino el sistema no reconoce nodemon o crear un script de npm dentro del package.json con el comando y llamar al script con npm run nombrescript


```
# Para empezar:
npm init
npm install express
npm install -g nodemon
npm run dev
poner "type": "module", en package.json
y  "dev": "nodemon --watch src src/app.js"


Alex González  12:27
3. Probando los métodos habituales. Vamos a crear un nuevo  servidor de express en el que construyamos los 5 métodos habituales dentro de la ruta /demo-methods . Tendremos que probarlos con postman:
GET: debe devolver el siguiente JSON ({ type: 'GET'})
POST: debe recibir un body que tenga la propiedad payload de tipo string y devolver el siguiente JSON ({ type: 'POST', payload: 'LO QUE DIGA LA REQUEST' })
PATCH: debe recibir un body que tenga la propiedad payload de tipo string y devolver el siguiente JSON ({ type: 'PATCH', payload: 'LO QUE DIGA LA REQUEST' })
PUT: debe recibir un body que tenga la propiedad payload de tipo string y devolver el siguiente JSON ({ type: 'PUT', payload: 'LO QUE DIGA LA REQUEST' })
DELETE: devolver el siguiente JSON ({ type: 'DELETE'})
Modificar el POST, PUT y PATCH para que si el cliente no manda la propiedad payload en el body devuelva un 400 con body de respuesta { error: 'La propiedad payload es obligatoria'}

Modificar el GET para poder leer los query strings . Añadir al body de respuesta una propiedad queryValuescon un array de strings con los valores del queryString de la request. //let valuesArray = Object.values(myObject);

En la siguiente URL tenéis el API de donde obtener los queryParams http://expressjs.com/en/4x/api.html#req.query  y un tutorial de como manejarlos (https://flaviocopes.com/express-get-query-variables/) 

En 30_05 Dos
Alex González  12:57
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

//que en el body de la respuesta yo vea las propiedades deQV cada valor de cada parametro, q metemos manualmente nosotros.

Ahora modificaremos el método POST para que genere una propiedad id única que se guarde junto con lo que metió el usuario. Cuando hagamos el GET  debe venirnos el id como atributo de las tasks. Para generar un id único podemos utilizar lo que se conoce como uuid. Os paso una librería que podéis instalar y utilizar para generar el id aleatoriamente. https://www.npmjs.com/package/uuid




1 - Crear una nueva app node con express y nodemon --> esto está en esta misma app
-- todas las funciones son async --

2 - Crear una función que compruebe si el archivo tasks.json contiene alguna tarea, si no lo hace, inicializarlo con un array vacío ([]).

3 - Otra función que, después de ejecutar la anterior (y await), obtiene el contenido de tasks.json (array de objetos, igual que el del kanban) y lo devuelve por return.

3 - Otra función que , después de objeter el contenido (array vacío o array de objetos) ejecutando la anterior, añada tareas al archivo ({title: "titulo de la tarea", description: "descripción", isCompleted boolean}) [añade nuevo objeto a array de objetos] --> esto está en app cajero aunque no había array antes del objeto

    La función deberá recibir (title,description,isCompleted) como paramentros

4 -Crear ruta '/tasks' (igual que '/demo-methods' en esta app), con:
    
    * Un GET que ejecute la función del punto 2 para obtener el contenido de tasks.json y lo devuelva.

    * Un POST que ejecute la función del punto 3 y le pasa los params sacándolos del query

        (primero hacer prueba básica de query, cuando sabes que tienes los querys, los metes a la función)
















[{title: "titulo de la tarea", description: "descripción", isCompleted boolean},
{title: "titulo de otra tarea", description: "descripción tarea 2..", isCompleted boolean}]
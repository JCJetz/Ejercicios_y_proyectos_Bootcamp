http://expressjs.com/en/starter/hello-world.html



# ExpressJS

Express es una librería npm, que nos ayuda a crear servidores HTTP y gestionar las respuestas a las solicitudes de los clientes.

Estos servidores se alojan en cualquier ordenador en intener que tenga NodeJS instalado, ya que el servidor es una app nodeJS.

Para crear ese ordenador se suelen utilizar o Hostings o Clouds. Nosotros lo vamos a desplegar en Heroku.

## ¿Como creo el hello world de un servidor HTTP?

1. Crear un proyecto NPM para una app NodeJS, de tipo module
2. Instalar la librería express [Tutorial](http://expressjs.com/en/starter/installing.html)
    > npm i express
3. Crear un archivo app.js
4. Crear el servidor [Tutorial](http://expressjs.com/en/starter/hello-world.html)
    1. Importar express
    2. Crear la app llamando a la función express()
    3. Definir las rutas y sus respuestas
    4. Poner a escuchar la app en un puerto


    # Protocolo HTTP

HTTP es un protocolo de comunicación entre ordenadores que sirve para transferir texto. Un protocolo es un idioma que saben hablar las computadoras.

HTTP es un protocolo de aplicación que utiliza TCP como protocolo de transporte.

HTTP tiene 3 elementos importantes a conocer:

- URL del recurso solicitado (vista en profundidad en otros temas)
- El cliente envía una petición `Request`
- El servidor, procesa la Request y devuelve una respuesta `Response`

Una vez que el servidor devuelve una respuesta, es como si nunca hubiese habido una conexión, esto significa que NO tiene estado.

## Request

Es la solicitud que hace un `cliente` (El navegador, postman, curl, ...) a un servidor en el que le pide que realice una `Operación` (CRUD) sobre un `Recurso` (es decir el dato).

Para hacer una petición necesitamos lo siguiente:

- _URL_: la dirección del servidor + el recurso sobre el que queremos operar.
- _Método HTTP_: Nos indica el tipo de operación que queremos hacer con el recurso.

  - **GET**: Sirve para obtener información del recurso, sería la R del CRUD.
  - **POST**: Sirve para crear información, crear nuevas entidades. Sería la C del CRUD
  - **PUT**: Sirve para sobreescribir el recurso entero. Sería una de las U del CRUD
  - **PATCH**: Sirve para actualizar partes de un recurso. Sería otra U del CRUD. A diferencia del PUT, el patch solo sobreescribe los campos que le indiques. El resto se quedan como estaban.
  - **DELETE**: Sirve para eliminar un recurso. Sería la D del CRUD.
  - **OPTIONS**: Esto no pertenece al CRUD, nos ayuda a saber las opciones que tenemos para nuestra petición. Principalmente se utiliza para el `CORS` (veremos más adelante). NO OPERA SOBRE LOS DATOS

  ¿Como puedo indicar como cliente el método HTTP?

  ```js
    // dentro del fetch se puede poner un segundo parámetro, que es un objeto de configuración de la petición
    const requestOptions = {
        method: 'PUT' // 'GET', 'POST', 'PATCH', 'DELETE', ...
    }
    fetch('_URL', requestOptions)
     .then(...)
     .then(...)
  ```

- _Body_: Cuerpo de la solicitud. Es donde mandamos la información al servidor. Debemos tener en cuenta que **solo POST, PUT o PATCH deberían tener body**. El body tiene un tipo de datos que se define como mimetype y tenemos muchísimos. El que más conocemos es JSON, pero tambien tendrías HTML, JS, PNG, TEXT, ... podemos ver la lista de mimetype en el [siguiente enlace](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

  ¿Como envío un body en mi Request?

  ```js
      // dentro del fetch se puede poner un segundo parámetro, que es un objeto de configuración de la petición. Ahi configuramos el body
      const requestOptions = {
          method: 'PUT' // 'GET', 'POST', 'PATCH', 'DELETE', ...
          body: JSON.stringify({exampleKey:'datos en JSON'}) // esto sería un body con mimetype application/json
      }
      fetch('_URL', requestOptions) // gestión de la solicitud
      .then(...) // aqui gestiamos la response del servido
      .then(...)
  ```

- _Headers_ o _Cabeceras_: Nos ayudan a configurar nuestra petición. Son elementos clave-valor y el servidor puede leer su información. Se utilizan para:
  - Autenticación y Autorización ([Authorization](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Authorization))
  - Especificar el mimetype de la solicitud ([Content-Type](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Type))
  - Indicar al servidor que mimetype acepto de respuesta ([Accept](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Accept))
  - Indicar al servidor en que idioma acepto el contenido de la respuesta ([Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language))
  - Cookies tambien es una header

Además de las header pre-establecidas, tambien se pueden crear nuestras propias headers. Por convención las headers propias suelen empezar su nombre por `X-<nombreHeader>`

¿Como meto headers en mi petición?

```js
    // dentro del fetch se puede poner un segundo parámetro, que es un objeto de configuración de la petición. Ahi configuramos el body
    const requestOptions = {
        method: 'PUT', // 'GET', 'POST', 'PATCH', 'DELETE', ...
        body: JSON.stringify({exampleKey:'datos en JSON'}), // esto sería un body con mimetype application/json
        headers: {
            'Accept-Language': 'es-ES',
            'Content-Type': 'application/json',
            'Accept': 'image/png',
            'X-<nombreCustom>': 'Mi valor SIEMPRE en string' // EJ: un JSON en una cabecera sería JSON.stringify({el objeto})
        }
    }
    fetch('_URL', requestOptions) // gestión de la solicitud
     .then(...) // aqui gestiamos la response del servido
     .then(...)
```

## Response

- Body: Igual que el body de la request
- Headers: Igual que las heades de solicitud, pero que las manda el servidor hacia el cliente.
- _Codigo de respuesta_ o _status code_: Es un código numérico que devuelve el servidor para indicar cual ha sido el estado de la solicitud:
  - 100-199: Para proporcionar información al cliente
  - 200-299: Respuestas correctas
  - 300-399: Respuestas con redirección. EJ: Un recurso ya no se encuentra en esa URL.
  - 400-499: Errores de cliente. Erroes producidos por la solicitud del cliente. EJ: 404
  - 500-599: Errores del servidor. Errores producidos internamente en el servidor y que el cliente no puede hacer NADA para solucionarlos

[Estados posibles](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


{
  "name": "hello-world-epress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",  // poner esto
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1"
  }
}



# app.js
```js
import express from 'express'; // paso 1

const app = express(); // paso 2

// http://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json

// paso 3: definir rutas
app.get('/', (req, res) => {
    // esta es la función que se ejecuta cuando se hace una petición GET a la ruta raíz
    res.send('Hello World Cambiado y a tope');
});

app.get('/bootcamp', (req, res) => {
    // esta es la función que se ejecuta cuando se hace una petición GET a la ruta raíz
    res.send('Esto es una respuesta dentro de una ruta');
});

app.get('/example-json', (req, res) => {
    // este metodo (.json()) es para enviar un json a un cliente
    res.json({ demo:'hello JSON'}); 
});

app.get('/example-status', (req, res) => {
    // status() es para enviar un codigo de estado antes de enviar una respuesta
    res.status(412);
    res.send('Esto ha sido un error 412'); 
});

app.get('/example-headers', (req, res) => {
    // set() es para enviar una cabecera antes de enviar una respuesta
    res.set('x-custom-header', 'hello world custom header');
    res.send('Esto ha sido una respuesta con una cabecera custom'); 
});


app.post('/example-post', (req, res) => {
    console.log(req.body); // esto es para obtener el body de la petición
    res.send('Esto es lo que estoy devolviendo en el post'); 
});

// paso 4: iniciar el servidor
app.listen(4563, () => {
    // esta es la función que se ejecuta cuando se inicia el servidor
    console.log('Server on port 4563');
});
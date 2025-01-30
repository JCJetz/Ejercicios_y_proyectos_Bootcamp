/*
1. Hello world fetch. 
Realizar una llamada GET a la siguiente URL (https://jetzjc.free.beeceptor.com/hello-mock) 
que tiene formato JSON. 
Pintar el valor de su única propiedad en un p.

Mock para el primer ejercicio:
{
    "hello": "Enhorabuena has pintado tu primer JSON"
 }

// ir al servidor a por los datos con un fetch
// cuando los tenga, funcion con array de objetos

*/

fetch('https://jetzjc.free.beeceptor.com/hello-mock')
.then(respuesta => respuesta.json() )
.then(respuesta => document.write(`<p>${respuesta.hello}</p>`));



/* 
//EXERCISE EN fetch2.js & index2.html
2. Jugando con Arrays. 
Realizar una llamada GET a la siguiente URL (https://jetzjc.free.beeceptor.com/square-divs) 
y pintar los divs de los colores de fondo que indica nuestro servidor.
*/




/*//EXERCISE EN fetch3.js & index3.html

3. Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. 
Lo primero que tenemos que aprender es a leer la documentación de un API 
(la url de acceso a la información que queremos de un servidor).
 La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). Realizar lo siguiente:

a.Identificar la URL donde se encuentra la información que queremos pintar (listado de productos).
b.Realizar la llamada en nuestra aplicación
c.Para cada producto pintar una card como la que se muestra en la imagen. (6.png)

Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos,
 pero la respuesta nos dice que hay 100 disponibles. 
 Leer el apartado Limit and skip products para entender como podríamos modificar la URL 
 y que el servidor nos devuelva los 100 productos a pintar.

Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección que muestre la siguiente información:

Mostrar en un p cuantos TELEFONOS cuestan más de 500€
Mostrar  en otro p el precio medio de todos los productos
Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5
Mostrar la lista de categorias de productos que existen

*/




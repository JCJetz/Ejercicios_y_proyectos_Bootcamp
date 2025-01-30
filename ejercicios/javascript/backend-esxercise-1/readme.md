# # Introducción NodeJS

![SO y Apps](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzbPTs6LUEmCDwPRdQBJGwoVMjZ7Us_oBkke-zM3AkUnrKuM7eDNGbXxI7HYzF3BRQwA&usqp=CAU).

Nosotros desarrollaremos aplicaciones NodeJS para el sistema operativo

## Proceso

Un proceso es una aplicación en ejecución. Cualquier cosa que se ejecute en un SO tiene que tener un proceso asociado.

Cuando una aplicación se lanza, el SO le da un identificador de proceso (PID)

Este PID puede crear procesos hijos (Child Process).

El que creo el proceso se le llama Padre y su identificador se le conoce como PPID.

NodeJS tiene un módulo core llamado `Process` que nos permite gestionar y operar el proceso del SO.

[Docu](https://nodejs.org/dist/latest-v16.x/docs/api/process.html).

## ¿Como se ejecuta un programa en nodejs?

Necesidades:

1. archivo con extensión `.js`
2. terminal y ejecutar el comando:
    > node _nombre_archivo_.js

Podemos pasar parámetros de entrada al programa separando sus valores por espacios.

> node _nombre_archivo_.js _param1_ _param2_ ...

Podemos recibirlos en nuestro programa nodeJS utilizando `process.argv`

[Ejemplo](https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processargv)

## Otros módulos del Core de NodeJS

- [os Module](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)
- [path Module] => utilidades a gestionar rutas del sistema operativo
- [url Module] => utilidades para gestionar una URL
- [fs Module] => File System Module, para gestionar el sistema de archivos y directorios del os
- [dns Module] => Modulo para la gestión de los DNS
...


## ejercicios 24/05/2022

Crear un programa en NodeJS que imprima por pantalla hola mundo y termine. Añadir a este programa para que pinte el PID y el PPID en el hola mundo.

Crear un programa en NodeJS que imprima por pantalla la versión del SO, la arquitectura, el nº de CPU's, la memoria libre, la ruta del directorio home y la lista de interfaces de red. De cada interfaz habrá que pintar nombre, dirección ipV4,  dirección ipv6 y dirección MAC. Hint: Toda la información se obtiene del módulo OS de NodeJS. Cuidado con los tipos de datos.

Crear un programa en NodeJS que solicite el la IP versión 4 para el DNS (www.google.com) y la pinte por pantalla. Hint: Utilizar el módulo de DNS. Metodo lookup. ¿Es síncrono o asíncrono?

Los programas cuando los ejecutamos pueden recibir parámetros de entrada. Estos parámetros nos permiten configurar nuestra aplicación y se puede obtener su valor dentro del programa. 
Para obtener los parámetros de un programa utilizamos el array process.argv. Para poder pasar un parámetro de entrada a un programa NodeJS, tendremos que ejecutar el programa y con espaciós vamos pasando cada uno de los parámetros. 

EJ: node hello-world.js 3 adios este programa node le mandamos dos parámetros de entrada cuyo valor, en este caso, son "3" y "adios". 
Construir un programa en NodeJS que pinte por consola el valor del primer parámetro de entrada que se le pase.
Construir un programa en NodeJS, que reciba por parámetro el DNS y pinte por consola la IPv4 y la IPv6 de ese DNS.
[Leyend] Construir un programa en NodeJS que reciba por parámetro o una IPv4 o un DNS y pinte por consola IPv4, IPv6 y DNS

# Ejecutar el proyecto
node index.js 
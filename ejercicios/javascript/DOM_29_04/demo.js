/*
1.En un documento html vacio, crea un H2, luego ponle un texto y 
luego una clase que cambie de color, usando los métodos del objeto Document.
*/

let h2 = document.createElement('H2');
h2.textContent = "pongo un texto";
h2.className = "rojo";
document.body.append(h2);

//document.getElementsByClassName("color")[0].style.color = "red";


/*
2.El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)
// create parent div for element
*/

let div = document.createElement('div'); //creo y guardo en variable un div
div.id = "Div creado EJ2";
let target = document.getElementsByClassName("rojo")[0];
//document.write(target);
target.parentNode.insertBefore(div,target);
div.appendChild(target);

/*
3.Elimina el div anterior con el metodo indicado desde javascript,  
ahora crea un nuevo div el cual tendrá dentro un 
enlace a  Google con un target _blank,
un párrafo y una lista de marca de coches ('SEAT', FORD Y CITROEN), 
usar metodos del objeto Document (create element....).(easy)
*/
//removeAttribute
//subir a su padre (parentElement) y borrar a su hijo (newdiv)



//crear nuevo div y seccionar el body como anchor
let div2 = document.createElement('div');
div2.id = "Segundo div creado";
//let body = document.getElementsByTagName("body")[0];

// crear enlace
let link = document.createElement("a")

// texto
let txt = document.createTextNode("Enlace a google")

//juntar link y texto
link.appendChild(txt)

// href del enlace
link.href = "https://www.google.com";
// target _blank para el enlace (nueva ventana)
link.setAttribute('target', '_blank');

// timeout antes de borrar div anterior y crear este
setTimeout(function(){
    //borrar div anterior
    div.parentElement.removeChild(div);
    //insertar el nuevo div como antes
    div2.appendChild(link);
    document.body.append(div2);
},2000);


// Lista de coches //

let lista = document.createElement("ul");

let item1 = document.createElement("li");
let marca1 = document.createTextNode("Ford");

let item2 = document.createElement("li");
let marca2 = document.createTextNode("Renault");

let item3 = document.createElement("li");
let marca3 = document.createTextNode("Seat");

// ford, renault y seat dentro de sus li's
item3.appendChild(marca3);
item2.appendChild(marca2);
item1.appendChild(marca1);
// lis dentro de su ul
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
// ul dentro del div de antes

setTimeout(function(){
    div2.appendChild(lista);
},4000);




//Ejercicio 4. en index2.html & demo2.js



/* Ejercicios: 5, 6, 7 y 8 en index5.html y demo5.js

5.Crea un documento HTML con un body vacío,  
ahora crea un objeto de tipo city que contenga 
{imagen, nombre de la ciudad, descripción}, 
repite el proceso con varias ciudades de tu elección y con ello crea un array 
de ciudades, ahora vamos a darle vida en nuestro html:(hard)

6.Crea una función llamada addCities  que reciba  un array  de ciudades como parámetro y lo añada al DOM.
7.Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.
8.Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.
*/
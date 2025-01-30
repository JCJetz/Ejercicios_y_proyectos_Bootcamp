/*
1.En un documento html vacio, crea un H2, luego ponle un texto y 
luego una clase que cambie de color, usando los métodos del objeto Document.
*/


document.getElementsByClassName("color")[0].style.color = "red";


/*
2.El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)
// create parent div for element
*/

let div = document.createElement('div'); //creo y guardo en variable un div
let target = document.getElementsByClassName("color")[0];
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

//borrar div anterior
newdiv = target.parentElement;
document.write(newdiv);
newdiv.parentElement.removeChild(newdiv);

//crear nuevo div y seccionar el body como anchor
let div2 = document.createElement('div');
let body = document.getElementsByTagName("body")[0];

// crear enlace
let link = document.createElement("a")

// texto
let txt = document.createTextNode("Enlace a google")

//juntar link y texto
link.appendChild(txt)

//href del enlace
link.href = "https://www.google.com";
//target _blank para el enlace (nueva ventana)
link.setAttribute('target', '_blank');

//insertar el nuevo div como antes
body.parentNode.insertBefore(div2,body);
// insertar el enlace creado
div2.appendChild(link);
//cerrar div
div.appendChild(body);


// p y lista de coches //

//crear p
p = document.createElement("p");
//meter texto en p
p.innerHTML = 'Hola soy un párrafo';
//añadir p al div2 del ej de antes
div2.append(p);

//lista coches
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
div2.appendChild(lista);



////////////////
///////////////



/*
1.En un documento html vacio, crea un H2, luego ponle un texto y 
luego una clase que cambie de color, usando los métodos del objeto Document.
*/


document.getElementsByClassName("color")[0].style.color = "red";


/*
2.El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)
// create parent div for element
*/

let div1 = document.createElement('div1'); //creo y guardo en variable un div
let targett = document.getElementsByClassName("color")[0];
//document.write(target);
targett.parentNode.insertBefore(div,targett);
div.appendChild(targett);

/*
3.Elimina el div anterior con el metodo indicado desde javascript,  
ahora crea un nuevo div el cual tendrá dentro un 
enlace a  Google con un target _blank,
un párrafo y una lista de marca de coches ('SEAT', FORD Y CITROEN), 
usar metodos del objeto Document (create element....).(easy)
*/
//removeAttribute
//subir a su padre (parentElement) y borrar a su hijo (newdiv)

//borrar div anterior
newdiv = target.parentElement;
document.write(newdiv);
newdiv.parentElement.removeChild(newdiv);

//crear nuevo div y seccionar el body como anchor
let div22 = document.createElement('div');
let body1 = document.getElementsByTagName("body1")[0];

// crear enlace
let link = document.createElement("a")

// texto
let txt = document.createTextNode("Enlace a google")

//juntar link y texto
link.appendChild(txt)

//href del enlace
link.href = "https://www.google.com";
//target _blank para el enlace (nueva ventana)
link.setAttribute('target', '_blank');

//insertar el nuevo div como antes
body.parentNode.insertBefore(div2,body);
// insertar el enlace creado
div2.appendChild(link);
//cerrar div
div.appendChild(body);


// p y lista de coches //

//crear p
p = document.createElement("p");
//meter texto en p
p.innerHTML = 'Hola soy un párrafo';
//añadir p al div2 del ej de antes
div2.append(p);

//lista coches
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
div2.appendChild(lista);
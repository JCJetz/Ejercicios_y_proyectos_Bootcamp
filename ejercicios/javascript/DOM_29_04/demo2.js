/*
4.En un documento html crea un UL con un Atributo llamado "dom-demo" , 
dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán
además  otra class llamada "special", un LI tendrá el atributo dom-demo 
y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". 
El ejercicio será el siguiente:(medium)

a-Recuperar todos los li de la página y muéstralos por consola. */
//.getElementsByTagName('li');
let lista = document.getElementsByTagName('li');
document.write(lista.outerHTML);


/*b-Recuperar todos los elementos con class "item" y muéstralos por consola.*/
//.getElementsByClassName("item");

let classitem = document.getElementsByClassName("item");
console.log(classitem);

//document.write(classitem.outerHTML);

/*c-Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.*/
//.getElementById("cuarto_elemento");

let ce = document.getElementById("cuarto_elemento");
console.log(ce.outerHTML);


/*d-Recuperar los elementos que tengan atributo  data-demo y muéstralo por consola (getAtribu...*/
//.querySelectorAll("[dom-demo]");    
    
let domdemo = document.querySelectorAll("[dom-demo]");  
console.log(domdemo);


/*e-Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".*/
var elementos_con_clase_special = document.getElementsByClassName('special');

setTimeout(function(){
  
  for (var i = 0; i < elementos_con_clase_special.length; i++) {
    elementos_con_clase_special[i].innerHTML = "texto de la clase special cambiado";
  };  


}, 2000);// espera 2 segundos


/*f-Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.*/
// .style.fontSize = "25px";
let elemetsDomDemo = document.querySelectorAll('[dom-demo]'); // Obtengo los elementos con atributo dom-demo

elemetsDomDemo.forEach(e => e.style.fontSize = '2rem'); // Cambio el tamaño de la letra

/*g-Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.*/

let newLi = document.createElement('li'); // Creo un nuevo elemento li
newLi.id = 'CREADO_CUSTOM'; // Le añado un ID
newLi.textContent = 'Nuevo elemento añadido al final de la lista'; // Le añado texto
let anchor = document.getElementById("lista");

setTimeout(function() {

  anchor.appendChild(newLi); // Lo inserto al final de la lista con timeout de 3s
  
}, 3000);



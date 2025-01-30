/* Partiendo de la clase de esta mañana:

let num = 987;                           // num tiene el tipo de datos `number`
let string = 'Hola, que tal estas';     // str es de tipo de datos `string`
let yes = true;                            // tipo boolean que representa verdadero
let no = false;                            // tipo boolean que representa falso

let noValue;                // cuando el valor no está definido, la variable tiene un tipo de datos `undefined`


let nullValue = null;       // es un tipo primitivo de JavaScript que representa la ausencia intencionada de un valor.

typeof _nombreVar_;         // me devuelve un string con el típo de datos de la variable que hemos puesto
*/


// 1. Crea una variable de todos los tipos primitivos de javascript 
// y mediante el document.write escribe por pantalla el type.



// Variables de todos los tipos primitivos
let num = 987;
let str = 'Hola, que tal estas';
let yes = true;
let no = false;
let noValue;
let nullValue = null; // null es un valor especial que indica la ausencia intencionada de un valor de objeto

//(mostrar el tipo de caden avariable usando: type document.write(typeof varxxxx);
document.write(typeof num);
document.write(typeof str);
document.write(typeof yes);
document.write(typeof no);
document.write(typeof noValue);
document.write(typeof nullValue);



//   ${}  ``  //
//la expresion entre dolar llave, y string entre comillas simples INTERPOLAR.

//añadiendo <br> (salto de línea para que no queden todos en la misma)
document.write(`${typeof str} <br>`);
document.write(`${typeof num} <br>`);
document.write(`${typeof yes} <br>`);
document.write(`${typeof no} <br>`);
document.write(`${typeof noValue} <br>`); // se declara sin valor por lo que es (su type) undefined
document.write(`${typeof nullValue} <br>`); //si le pido el type, me devuelve que es un objeto.





//2.Introduce un texto en prompt y este debe aparecer en un alert.

// pongo nam en vez de name, xk me sale tachado.
let nam = prompt("Introduce tu nombre");
alert(nam);




//3.Crear dos variables con tu nombre y apellido de tipo string y concatenalas con el operador (el +) y 
//luego repite la operación con plantillas literales, pinta en un h1 mediante el document.write el resultado.
//interpoplar es plantilla literal.

// le quito el let xk me sale rojo el nam
let firstName = 'Jetzabel';
let lastName = 'Cisneros';
let resultado = firstName + ' ' + lastName;
document.write(`<h1>${resultado}</h1>`);


document.write(resultado.length);  // CONCATENAR +  al hacer console.log obtengo <h1> Jetzabel Cisneros </h1>



//4.Imprimir por pantalla la longitud del string resultante del ejercicio anterior.


//Esto seria así
//let a = '<h1>' + nam + ' ' + surn + '</h1>';
//document.write(a.length);
// ó así
document.write(`<h1>${nam} ${surn}<h1>`.length);




//5. Mediante prompt guarda una variable de tipo string que sea un color, 
//pinta un div de 150 x 150 que contenga el color indicado en el prompt. //Así   `<div style="background-color:${varXxxx}height:150px;width:150px;"></div>``

let color = prompt('Introduce un color');
let div = `<div style="background-color:${color};height:150px;width:150px;"></div>`;
document.write(div);



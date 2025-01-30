/*1.Crear dos variables numéricas y realiza su suma, resta multiplicación y división, 
imprime por pantalla los dos números con la operación, el igual y el resultado.
*/

let a = 10;
let b = 20;


document.write(`
<p>${a} + ${b} = ${a+b}</p>
<p>${a} - ${b} = ${a-b}</p>
<p>${a} * ${b} = ${a*b}</p>
<p>${a} / ${b} = ${a/b}</p>
`);



/*
2.Ejercicio que guarde en una variable mediante el uso de prompt,  
los grados Celsius (X) 
e imprima por pantalla sus correspondientes grados Farenheit, ejemplo "X ºC son YºF".
*/

// fórmula celcius a farenheit = (°C × 9/5) + 32

let grados_celcius = prompt("Introduce la temperatura en celsius");
let grados_farenheit = (grados_celcius * 9/5) + 32;
document.write(`${grados_celcius} ºC equivalen a ${grados_farenheit} °F<br>`);





/*
3.Con el ejercicio de la calculadora de grados celsius,
imprime por pantalla si una variable en ºC temperatura es mayor de 87 ºF.

*/
//(convierto lo del ejercicio dos de antes, en una función)
//let grados_celcius = prompt("Introduce la temperatura en celsius");


let input = prompt("Introduce una temperatura en celsius");
let input_fare = input * 9/5 + 32;
if (input_fare > 87) {
  document.write(`La tempuratura introducida (${input} es mayor a 87ºF<br>`);
};





/*
4.Crea una variable de tipo string que sea 55 y otra de tipo number que sea 55 
con el uso de operadores de comparación pintar por pantalla true y luego false.
*/


s = "55";  //string
n = 55; //Integr num

// == verifica valor
// === verifica valor y type

document.write(s == n);
document.write(`<br>`);
document.write(s === n);





/*
5.Introduce un número por prompt y mediante operadores incremento y decremento y operadores de asignación  
imprime por pantalla el número mas 1 y el número menos 1 el número multiplicado y divido por si mismo.

*/

//${variable q quiero imprimir}

let pon = prompt("Pon un número");
ponint = parseInt(pon); //parseInt verifica q sea un núnero, devuelve NaN si no lo es.
document.write(`
Número introducido +1 = ${ponint+1} 
<br>
Número introducido -1 = ${ponint-1}
<br>
Número multiplicado por si mismo = ${ponint*ponint}
<br>
Número dividido por si mismo = ${ponint/ponint}`);





/*
6.Mediante el uso de prompt, crea dos variables que representen el peso y la altura 
e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS.
*/


let altura = prompt("Introduce tu altura en centímetros");
let peso = prompt("Introduce tu peso en kilogramos");

// formula IMC es Peso / (altura por 2) en metros.

let altura_centimetros = altura/100;
imc_input = (peso/(altura_centimetros*altura_centimetros)).toFixed(2);

// Obesidad grado II significa IMC de entre 35 y 39,9

if ((imc_input >= 35) && (imc_input < 40)) {
  document.write(`IMC de los datos introducidos es ${imc_input}, por lo que implica "Obesidad de clase II" según la OMS (entre 35 y 39,9)`);
} else {
  document.write(`IMC de los datos introducidos es ${imc_input}, por lo que no implica "Obesidad de clase II" según la OMS (entre 35 y 39,9)`);
};



/*
7.Crea una variable mediante prompt y proporcionarle un valor numérico, imprimir por pantalla si es par o impar.
*/

let input2 = prompt(`Introduce un número`);

//paso a numero entero la 'input2'parseInt
let input2_int = parseInt(input2);

// si es par --> (% 2 == 0) 
input2_int % 2 == 0 ? document.write(`El input (${input2_int}) es par`) : document.write(`El input (${input2_int}) es impar`);


/*
8.Mediante prompt crear una variable que represente el numero de hijos e 
imprime por pantalla si es familia numerosa o no (revisar que se considera familia numerosa) 
*/

let hijos = prompt(`Introduce el número de hijos`);
let hijos_int = parseInt(hijos);

// si es mayor o igual de 5 es especial, si mayor que 4, general, lo demas no es fam numerosa

if (hijos_int >= 5){
  document.write(`Familia Numerosa de Categoría Especial`);
} else if (hijos_int >= 4 && hijos_int < 5){
  document.write(`Familia Numerosa General`);
} else {
  document.write(`No es Familia Numerosa`);
};



/*
9.(HARD) Mediante prompt crear una variable que represente el saldo de tu cuenta, 
luego crea  3 variables numéricas que cada una represente un item de tu cesta
(ej: tomates, pescado, etc) de la compra y dales un precio. 

Imprimir por pantalla  la siguiente imagen usando solo document write y css, 
si el numero ingresado es mayor o igual que el total de la compra debera aparecer el boton de comprar
de lo contrario no se mostrara




let balance = parseFloat(propmt('Introduzca el saldo de tu cuenta'));

let tomatesPrice = 1.45;
let pescadoPrice = 15.88;
let carnePrice = 7.61;
let total = tomatesPrice+pescadoPrice+carnePrice;

let sufiBalance = balance >= total;



document.write(pego aqui todo el section de html copiado de los ejercicios del profe)

*/
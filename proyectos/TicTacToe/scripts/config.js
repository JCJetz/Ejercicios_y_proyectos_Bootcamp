/*
Esta función recibe un evento como parámetro. 
Dentro de la función, se asigna el valor del atributo "data-playerid" del elemento que generó el evento a 
la variable "editedPlayer". 
Luego, se cambia la propiedad "display" del elemento "playerConfigOverlayElement" a "block" 
para mostrarlo en la pantalla. 
También se cambia la propiedad "display" del elemento "backdropElement" a "block" 
para mostrar un fondo detrás del elemento de superposición.
*/

function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closerPlayerConfig() {
    playerConfigOverlayElement.style.display = 'none'; // oculta el elemento de superposición de configuración del reproductor.
    backdropElement.style.display = 'none'; //oculta elemento de fondo
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = ''; // vacía el contenido del elemento de salida de errores.
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
event.preventDefault(); //evita que se recargue la página al enviar el formulario.
const formData = new FormData(event.target); //Creo nuevo objeto `FormData` utilizando el objeto `event.target`, que es el formulario que desencadenó el evento.
const enteredPlayerName = formData.get('playername').trim();   /*trim: recorta el exceso de espacio en blanco.*/
console.log(enteredPlayerName);

if (!enteredPlayerName) { //enteredPlayerName === ''  is the same.
/*Because an empty string is considered a falsy value in JavaScript.*/
/*Which means it yields false if you was in a place where a Boolean is expected*/
event.target.firstElementChild.classList.add('error');
errorsOutputElement.textContent = 'Please enter a valid name.';

 
//Usamos return if we wanna pass a value to the place where the function was executed.
  // Or When you stop the execution of the function in which you call it. q es el caso.
  return;
}

const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

players[editedPlayer - 1].name = enteredPlayerName;

closerPlayerConfig();
}
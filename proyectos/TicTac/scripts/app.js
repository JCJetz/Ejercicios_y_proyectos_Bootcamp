/* este debería ser el archivo que se ejecuta primero, que inicializa un montón de cosas.*/
/*Quiero usar este archivo app.js para llegar a diferentes elementos HTML,
y almacenar estos elementos o pointers en estos elementos en diferentes variables o constantes de JavaScript.*/

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],

]; //It's just an array with other arrays as values.

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
    //{},
];


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn')
const gameFieldElements = document.querySelectorAll('#game-board li'); // selecciona todos los elementos 'li' dentro del elemento con ID 'game-board' y los asigna a la variable gameFieldElements.
const gameBoardElement = document.getElementById('game-board');



editPlayer1BtnElement.addEventListener('click', openPlayerConfig);//agrega un evento de clic al elemento con ID 'edit-player-1-btn' para llamar a la función 'openPlayerConfig'.
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closerPlayerConfig);
backdropElement.addEventListener('click', closerPlayerConfig);

formElement.addEventListener('submit', savePlayerConfig); //agrega un evento de envío al elemento 'form' para llamar a la función 'savePlayerConfig' cuando se envíe el formulario.

startNewGameBtnElement.addEventListener('click', startNewGame);


gameBoardElement.addEventListener('click', selectGameField);
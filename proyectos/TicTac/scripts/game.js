function  resetNewGameStatus() {
    activePlayer = 0; // Establece al jugador activo como 0.
    currentRound = 1;// Establece la ronda actual como 1.
    gameIsOver = false; // Establece el estado de "gameIsOver" como falso.
    gameOverElement.firstElementChild.innerHTML = 
    'You won! <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) { // Se inicia un ciclo `for` anidado dentro del ciclo anterior, que se ejecutará mientras el valor de `j` sea menor a 3.
        gameData[i][j] = 0; //establece `gameData`con valor 0indicando que la celda está vacía.
        const gameBoardItemElement = gameBoardElement.children[gameBoardIndex]; 
        gameBoardItemElement.textContent = '';
        gameBoardItemElement.classList.remove('disabled');
        gameBoardIndex++;
        }
    }
}
//verifica si los nombres de los jugadores en la posición 0 y 1 del array "players" están vacíos
//y ejecuta el código dentro del bloque {} si eso es verdadero
function startNewGame() {
if (players[0].name === '' || players[1].name === '' ) { 
alert('Please set custom player names for both players.');
return;
}
//resetGameStatus();


//Actualiza el contenido de activePlayerNameElement con el nombre del jugador activo del Array "players"
activePlayerNameElement.textContent = players[activePlayer].name;
gameAreaElement.style.display = 'block';
}

//verifica si el jugador activo es igual a cero, si es así lo cambia a uno, de lo contrario lo cambia a cero. 
function swichPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
 } else {
    activePlayer = 0;
 }
 activePlayerNameElement.textContent = players[activePlayer].name; //actualiza activePlayerNameElement con el nombre del jugador activo.

}
function selectGameField(event) { 
    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }

const selectedField = event.target;
const selectedColum = selectedField.dataset.col - 1;
const selectedRow = selectedField.dataset.row - 1;

if (gameData[selectedRow][selectedColum] > 0) {
    alert('Please select an empty field!');
    return;
}

selectedField.textContent = players[activePlayer].symbol; // players[0]
selectedField.classList.add('disabled');



gameData[selectedRow][selectedColum] = activePlayer + 1;

const winnerId = checkForGameOver();
if (winnerId !== 0) {
    endGame(winnerId);
}

currentRound = currentRound +1; // Tmb se puede poner currentRound++;
 swichPlayer();
}
function checkForGameOver() {
   //CHECKING THE ROWS FOR EQUALITY
    
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&      // aqui colum fijas, cambio rows.
            gameData[i][0] === gameData[i][1] && //[1]segunda colouma
            gameData[i][1] === gameData[i][2]
         ) {
        return gameData[i][0];
        }
    }
   //CHECKING THE COLUMS FOR EQUALITY
    for (let i = 0; i < 3; i++) {
        if (                           //aqui mantengo los rows fijos
            gameData[0][i] > 0 &&     //[ 0 es items in the rows]
            gameData[0][i] === gameData[1][i] && // [1]segundo row
            gameData[0][i] === gameData[2][i]    // [2]tercer row
         ) {
        return gameData[0][i];
        }
    }
   // CHECKING la diagonal de arriba a la izquierda hacia abajo a la derecha.
        if (
            gameData[0][0] > 0 && 
            gameData[0][0] === gameData[1][1] && 
            gameData[1][1] === gameData[2][2]
        ) {
            return gameData[0][0];
 } 
   // DIAGONAL: De abajo a la izquierda a arriba a la derecha.
   if (
    gameData[2][0] > 0 && 
    gameData[2][0] === gameData[1][1] && 
    gameData[1][1] === gameData[0][2]
) {
    return gameData[2][0];
} 

if(currentRound === 9) {
    return -1;  //empate
}
return 0;
} 


function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if(winnerId > 0) {
        const winnerName = players[winnerId -1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
    } else { 
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!'
    }
   }


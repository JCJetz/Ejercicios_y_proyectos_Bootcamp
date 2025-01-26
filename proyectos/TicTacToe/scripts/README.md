# Tic Tac Toe App
This is a Tic Tac Toe game app where two players take turns placing their respective symbols (X or O) on a 3x3 game board. The objective of the game is to get three of the same symbols in a row, column, or diagonal.

## Features
- Custom player names: Players can enter their names before starting the game.
- Alternate turns: Players take turns placing their symbols on the game board.
- Win condition: The game checks for a win condition after each move to determine if a player has won the game.
- End game: The game ends when a player wins or when all the cells on the game board are filled.
- Error handling: Error messages are displayed if players do not enter valid names or select an empty cell.

## How to Play
1. Enter the names of both players by clicking on the "Edit" button next to their respective symbols.
2. Start the game by clicking on the "Start Game" button.
3. Players take turns selecting an empty cell on the game board to place their symbol.
4. The game checks for a win condition after each move.
5. If a win condition is met, the game ends and displays the winner's name.
6. If all the cells on the game board are filled and no win condition is met, the game ends in a draw.

## Code Explanation

### Initialization
- The game data is stored in a 2D array called `gameData`, which represents the 3x3 game board.
- The `editedPlayer` variable stores the index of the player being edited.
- The `activePlayer` variable stores the index of the player whose turn it is.
- The `currentRound` variable stores the current round number.
- The `gameIsOver` variable stores the state of the game.

### Player Config
- The `openPlayerConfig` function is triggered by clicking on the "Edit" button next to a player's symbol. It opens the player configuration overlay and backdrop.
- The `closerPlayerConfig` function is triggered by clicking on the close button or backdrop. It closes the player configuration overlay and backdrop.
- The `savePlayerConfig` function is triggered by submitting the player configuration form. It saves the entered player name and updates the player data on the screen.

### Game Logic
- The `startNewGame` function is triggered by clicking on the "Start Game" button. It checks if both players have entered their names and starts the game if valid names are provided.
- The `selectGameField` function is triggered by clicking on a cell on the game board. It assigns the active player's symbol to the selected cell, updates the game data array, checks for a win condition, and switches to the next player.
- The `checkForGameOver` function checks the game data array for win conditions. It checks rows, columns, and diagonals for equality of symbols. If a win condition is met, it returns the winning player's symbol. If all cells are filled and no win condition is met, it returns -1 for a draw. Otherwise, it returns 0.
- The `endGame` function ends the game and displays the game over message. If a winner is found, it displays the winner's name. If it's a draw, it displays a draw message.

## Dependencies
This Tic Tac Toe app has no external dependencies. It is written in pure JavaScript and does not require any additional libraries or frameworks.

## How to Run
To run the Tic Tac Toe app, simply open the `index.html` file in a web browser. The app will load and you can start playing the game by following the instructions on the screen.


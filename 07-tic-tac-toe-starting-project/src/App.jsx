import { useState } from "react"
import GameBoard from "./components/Gameboard/GameBoard"
import Player from "./components/player/Player"
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/Gameover/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS = { "X": "Aritra", "O": "DD" };

function deriveActivePlayer(gameTurns) {

  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {

    currentPlayer = "O";

  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {

  let winner = undefined;
  for (const winningCombination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = gameBoard[winningCombination[0].row][winningCombination[0].column];
    const secondSquareSymbol = gameBoard[winningCombination[1].row][winningCombination[1].column];
    const thirdSquareSymbol = gameBoard[winningCombination[2].row][winningCombination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      winner = players[firstSquareSymbol];

    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {

  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {

    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;

  }
  return gameBoard;
}


function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;


  function setHandlePlayerNameChange(symbol, newName) {

    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    })
  }

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ]
      return updatedGameTurns;
    })
  }

  function handleRestart() {

    setGameTurns([]);

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName={PLAYERS.X}
            symbol="X" isActive={activePlayer === "X"}
            onChangeName={setHandlePlayerNameChange}
          />
          <Player
            initialPlayerName={PLAYERS.O}
            symbol="O" isActive={activePlayer === "O"}
            onChangeName={setHandlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

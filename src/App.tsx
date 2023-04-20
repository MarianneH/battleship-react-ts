import { useEffect, useState } from "react";
import "./App.css";
import Battlefield from "./components/Battlefield/Battlefield";
import GameStats from "./components/GameStats/GameStats";

function App() {
  const [gameModel, setGameModel] = useState({
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    tries: 0,
    hits: 0,
  });
  const [sunkMessage, setSunkMesssage] = useState("message");
  const [winMessage, setWinMesssage] = useState("message");

  useEffect(() => {
    if (gameModel.shipsSunk === 0) {
    } else if (gameModel.shipsSunk / gameModel.numShips === 1) {
      setWinMesssage("show message");
    } else {
      setSunkMesssage("show message");
    }
  }, [gameModel.shipsSunk]);

  useEffect(() => {
    if (sunkMessage === "show message") {
      const interval = setInterval(() => {
        setSunkMesssage("message");
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [sunkMessage]);

  return (
    <div className="App">
      <GameStats gameModel={gameModel} />
      <Battlefield gameModel={gameModel} setGameModel={setGameModel} />
      <div className={`${sunkMessage}`}>Ship sunk!</div>
      <div className={`${winMessage}`}>
        <div>You won!</div>
        <div>
          Your precision is {(gameModel.hits / gameModel.tries).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default App;

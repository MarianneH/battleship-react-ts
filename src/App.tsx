import "./App.css";
import Battlefield from "./components/Battlefield/Battlefield";

function App() {
  let gameModel = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: null,
  };
  return (
    <div className="App">
      <Battlefield gameModel={gameModel} />
    </div>
  );
}

export default App;

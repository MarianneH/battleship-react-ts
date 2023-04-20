import React from "react";
import { GameModelType } from "../../types/GameModelType";

function GameStats({ gameModel }: { gameModel: GameModelType }) {
  return (
    <div className="gamestats">
      <div>Battleship React</div>
      <div className="counters">
        <div>Tries: {gameModel.tries}</div>
        <div>Ships sunk: {gameModel.shipsSunk}</div>
      </div>
    </div>
  );
}

export default GameStats;

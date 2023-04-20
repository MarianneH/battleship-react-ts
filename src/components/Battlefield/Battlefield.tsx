import { useEffect, useState } from "react";
import SingleField from "../SingleField/SingleField";
import { intitializeShips } from "./intitializeShips";
import { getFullySunkenShips } from "./getFullySunkenShips";
import { ShipType } from "../../types/ShipType";
import { GameModelType } from "../../types/GameModelType";

function Battlefield({
  gameModel,
  setGameModel,
}: {
  gameModel: GameModelType;
  setGameModel: React.Dispatch<React.SetStateAction<GameModelType>>;
}) {
  const boardSize = gameModel.boardSize;
  const numShips = gameModel.numShips;
  const shipLength = gameModel.shipLength;
  const [ships, setShips] = useState<ShipType | null>(null);
  const [sunkenShips, setSunkenShips] = useState<string[][]>([]);

  useEffect(() => {
    let currentShips = intitializeShips(boardSize, numShips, shipLength);
    setShips(currentShips);
  }, []);

  useEffect(() => {
    setSunkenShips(getFullySunkenShips(ships));
  }, [gameModel.hits]);

  useEffect(() => {
    setGameModel((prev) => ({
      ...prev,
      shipsSunk: sunkenShips.length,
    }));
  }, [sunkenShips.length]);

  return (
    <table>
      <tbody>
        {[...Array(boardSize)].map((e, i) => (
          <tr key={i}>
            {[...Array(boardSize)].map((e, j) => (
              <SingleField
                key={j}
                id={`${i}${j}`}
                ships={ships}
                setShips={setShips}
                sunkenShips={sunkenShips}
                gameModel={gameModel}
                setGameModel={setGameModel}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

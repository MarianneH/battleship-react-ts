import { useEffect, useState } from "react";
import SingleField from "../SingleField/SingleField";
import { intitializeShips } from "./intitializeShips";
import { getFullySunkenShips } from "./getFullySunkenShips";
import { ShipType } from "../../types/ShipType";
import { GameModelType } from "../../types/GameModelType";

function Battlefield({ gameModel }: { gameModel: GameModelType }) {
  const boardSize = gameModel.boardSize;
  const numShips = gameModel.numShips;
  const shipLength = gameModel.shipLength;
  const [ships, setShips] = useState<ShipType | null>(null);
  const [hits, setHits] = useState<number>(0);
  const [sunkenShips, setSunkenShips] = useState<string[][]>([]);

  useEffect(() => {
    let currentShips = intitializeShips(boardSize, numShips, shipLength);
    setShips(currentShips);
  }, []);

  useEffect(() => {
    setSunkenShips(getFullySunkenShips(ships));
  }, [hits]);

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
                setHits={setHits}
                setShips={setShips}
                sunkenShips={sunkenShips}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

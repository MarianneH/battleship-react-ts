import { useEffect, useState } from "react";
import SingleField from "./SingleField";
import { intitializeShips } from "./intitializeShips";
import { getFullySunkenShips } from "./getFullySunkenShips";
import { ShipType } from "../types/ShipType";

function Battlefield() {
  let fieldSize = 7;
  const [ships, setShips] = useState<ShipType | null>(null);
  const [hits, setHits] = useState<string[]>([]);
  const [sunkenShips, setSunkenShips] = useState<string[][]>([]);

  useEffect(() => {
    let currentShips = intitializeShips(fieldSize);
    setShips(currentShips);
  }, []);

  useEffect(() => {
    setSunkenShips(getFullySunkenShips(ships, hits));
  }, [hits]);

  return (
    <table>
      <tbody>
        {[...Array(fieldSize)].map((e, i) => (
          <tr key={i}>
            {[...Array(fieldSize)].map((e, j) => (
              <SingleField
                key={j}
                id={`${i}${j}`}
                ships={ships}
                setHits={setHits}
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

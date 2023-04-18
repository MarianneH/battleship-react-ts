import { useEffect, useState } from "react";
import SingleField from "./SingleField";
import { intitializeShips } from "./intitializeShips";
import { getFullySunkenShips } from "./getFullySunkenShips";

interface ShipsType {
  [index: number]: { positions: string[]; hits: string[] };
}

const ships = {
  ship1: { positions: ["10", "11", "12"], hits: ["", "", ""] },
  ship2: { positions: ["20", "30", "40"], hits: ["", "", ""] },
  ship3: { positions: ["54", "55", "56"], hits: ["", "", ""] },
};

function Battlefield() {
  let fieldSize = 7;
  const [ships, setShips] = useState<string[][]>([]);
  const [shipsA, setShipsA] = useState<ShipsType>({});
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

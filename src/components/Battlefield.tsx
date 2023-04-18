import { useEffect, useState } from "react";
import SingleField from "./SingleField";
import { intitializeShips } from "./intitializeShips";
function Battlefield() {
  let fieldSize = 7;
  const [ships, setShips] = useState<string[][]>([]);

  useEffect(() => {
    let currentShips = intitializeShips(fieldSize);
    setShips(currentShips);
    console.log(currentShips);
  }, []);

  const [hits, setHits] = useState<string[]>([]);

  useEffect(() => {
    console.log(hits);
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
                hits={hits}
                setHits={setHits}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

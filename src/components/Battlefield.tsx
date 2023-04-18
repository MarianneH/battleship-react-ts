import SingleField from "./SingleField";
import { intitializeShips } from "./intitializeShips";
function Battlefield() {
  let fieldSize = 7;
  let ships = intitializeShips(fieldSize);
  let hits: string[] = [];

  return (
    <table>
      <tbody>
        {[...Array(fieldSize)].map((e, i) => (
          <tr key={i}>
            {[...Array(fieldSize)].map((e, j) => (
              <SingleField key={j} id={`${i}${j}`} ships={ships} hits={hits} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

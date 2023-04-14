import { RiShipFill } from "react-icons/ri";
import SingleField from "./SingleField";
function Battlefield() {
  let fieldSize = 7;
  return (
    <table>
      <tbody>
        {[...Array(fieldSize)].map((e, i) => (
          <tr key={i}>
            {[...Array(fieldSize)].map((e, j) => (
              <SingleField key={j} id={`${i}${j}`} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

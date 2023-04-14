function Battlefield() {
  let fieldSize = 7;
  return (
    <table>
      <tbody>
        {[...Array(fieldSize)].map((e, i) => (
          <tr>
            {[...Array(fieldSize)].map((e, j) => (
              <td id={`${i}${j}`}>hi</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

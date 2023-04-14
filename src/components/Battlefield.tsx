function Battlefield() {
  let fieldSize = 7;
  return (
    <table>
      <tbody>
        {[...Array(fieldSize)].map((e, i) => (
          <tr key={i}>
            {[...Array(fieldSize)].map((e, j) => (
              <td
                key={j}
                id={`${i}${j}`}
                onClick={(e: React.MouseEvent) =>
                  console.log(e.currentTarget.id)
                }
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Battlefield;

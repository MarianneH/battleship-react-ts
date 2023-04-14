import React, { useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { GiSinkingShip } from "react-icons/gi";
import { CiNoWaitingSign } from "react-icons/ci";

function SingleField({ id }: { id: string }) {
  const [icon, setIcon] = useState<null | "hit" | "sunk" | "miss">(null);
  return (
    <td
      id={id}
      onClick={(e: React.MouseEvent) => console.log(e.currentTarget.id)}
    >
      {icon === "hit" && <RiShipFill />}
      {icon === "sunk" && <GiSinkingShip />}
      {icon === "miss" && <CiNoWaitingSign />}
    </td>
  );
}

export default SingleField;

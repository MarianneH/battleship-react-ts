import React, { useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { GiSinkingShip } from "react-icons/gi";
import { CiNoWaitingSign } from "react-icons/ci";

interface SingleFieldProps {
  id: string;
  ships: string[][];
  hits: string[];
  setHits: React.Dispatch<React.SetStateAction<string[]>>;
}

function SingleField({ id, ships, hits, setHits }: SingleFieldProps) {
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

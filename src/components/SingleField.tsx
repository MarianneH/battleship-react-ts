import React, { useEffect, useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { GiSinkingShip } from "react-icons/gi";
import { CiNoWaitingSign } from "react-icons/ci";
import { isShipHit } from "./isShipHit";
import { ShipType } from "../types/ShipType";

interface SingleFieldProps {
  id: string;
  ships: ShipType;
  sunkenShips: string[][];
  setHits: React.Dispatch<React.SetStateAction<string[]>>;
}

function SingleField({ id, ships, setHits, sunkenShips }: SingleFieldProps) {
  const [icon, setIcon] = useState<null | "hit" | "sunk" | "miss">(null);

  function handleFieldClick() {
    if (isShipHit(ships, id)) {
      setIcon("hit");
      setHits((prev) => [...prev, id]);
    } else {
      setIcon("miss");
    }
  }

  useEffect(() => {
    sunkenShips.map((ship) =>
      ship.map((field) => field === id && setIcon("sunk"))
    );
  }, [sunkenShips]);

  return (
    <td id={id} onClick={() => handleFieldClick()}>
      {icon === "hit" && <RiShipFill className="icon" />}
      {icon === "sunk" && <GiSinkingShip className="icon sunk" />}
      {icon === "miss" && <CiNoWaitingSign className="icon miss" />}
    </td>
  );
}

export default SingleField;

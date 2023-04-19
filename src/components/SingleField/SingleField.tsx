import React, { useEffect, useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { GiSinkingShip } from "react-icons/gi";
import { CiNoWaitingSign } from "react-icons/ci";
import { isShipHit } from "./isShipHit";
import { ShipType } from "../../types/ShipType";
import { updateShipsWithHits } from "./updateShipsWithHits";

interface SingleFieldProps {
  id: string;
  ships: ShipType | null;
  sunkenShips: string[][];
  setHits: React.Dispatch<React.SetStateAction<number>>;
  setShips: React.Dispatch<React.SetStateAction<ShipType | null>>;
}

function SingleField({
  id,
  ships,
  setHits,
  sunkenShips,
  setShips,
}: SingleFieldProps) {
  const [icon, setIcon] = useState<null | "hit" | "sunk" | "miss">(null);

  function handleFieldClick() {
    if (isShipHit(ships, id)) {
      setIcon("hit");
      let updatedShips = updateShipsWithHits(id, ships);
      setShips(updatedShips);
      setHits((prev) => (prev += 1));
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

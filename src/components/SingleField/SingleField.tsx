import React, { useEffect, useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { GiSinkingShip } from "react-icons/gi";
import { CiNoWaitingSign } from "react-icons/ci";
import { isShipHit } from "./isShipHit";
import { ShipType } from "../../types/ShipType";
import { updateShipsWithHits } from "./updateShipsWithHits";
import { GameModelType } from "../../types/GameModelType";

interface SingleFieldProps {
  id: string;
  ships: ShipType | null;
  sunkenShips: string[][];
  setShips: React.Dispatch<React.SetStateAction<ShipType | null>>;
  setGameModel: React.Dispatch<React.SetStateAction<GameModelType>>;
}

function SingleField({
  id,
  ships,
  sunkenShips,
  setShips,
  setGameModel,
}: SingleFieldProps) {
  const [icon, setIcon] = useState<null | "hit" | "sunk" | "miss">(null);

  function handleFieldClick() {
    if (isShipHit(ships, id)) {
      setIcon("hit");
      let updatedShips = updateShipsWithHits(id, ships);
      setShips(updatedShips);
      setGameModel((prev) => ({
        ...prev,
        hits: prev.hits + 1,
      }));
    } else {
      setIcon("miss");
    }
    setGameModel((prev) => ({
      ...prev,
      tries: prev.tries + 1,
    }));
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

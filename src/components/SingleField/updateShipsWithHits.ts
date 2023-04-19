import { ShipType } from "../../types/ShipType";

export function updateShipsWithHits(id: string, ships: ShipType | null) {
  let shipsCopy = ships;

  for (let shipId in shipsCopy) {
    const ship = shipsCopy[shipId];
    if (ship.positions.includes(id)) {
      const hitsCopy = [...ship.hits];
      const index = ship.positions.indexOf(id);
      hitsCopy[index] = "HIT";
      shipsCopy[shipId] = { ...ship, hits: hitsCopy };
    }
  }
  return shipsCopy;
}

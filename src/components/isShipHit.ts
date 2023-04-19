import { ShipType } from "../types/ShipType";

export function isShipHit(ships: ShipType, field: string) {
  let isShipHit = false;

  for (let i in ships) {
    if (ships[i].positions.includes(field)) {
      isShipHit = true;
    }
  }

  return isShipHit;
}

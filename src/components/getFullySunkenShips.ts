import { ShipType } from "../types/ShipType";

export function getFullySunkenShips(ships: ShipType | null, hits: string[]) {
  let result: string[][] = [];

  for (let i in ships) {
    let count = 0;

    for (let j = 0; j < ships[i].positions.length; j++) {
      if (hits.includes(ships[i].positions[j])) {
        count += 1;
      }
    }

    if (count === 3) {
      result.push(ships[i].positions);
    }
  }
  return result;
}

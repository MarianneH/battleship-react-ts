import { ShipType } from "../types/ShipType";

export function getFullySunkenShips(ships: ShipType | null) {
  let result: string[][] = [];

  for (let i in ships) {
    let count = 0;

    ships[i].hits.map((el) => (el === "HIT" ? (count += 1) : count));

    if (count === 3) {
      result.push(ships[i].positions);
    }
  }
  return result;
}

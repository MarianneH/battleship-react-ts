import { ShipType } from "../types/ShipType";

export function getFullySunkenShips(ships: ShipType | null, hits: string[]) {
  let result: string[][] = [];

  for (let ship in ships) {
    let count = 0;
    // console.log(ship);
    // for (let j = 0; j < ship.positions.length; j++) {
    //   if (hits.includes(ships.ship[j])) {
    //     count += 1;
    //   }
  }

  // if (count === 3) {
  //   result.push(ships[i]);
  //     // }
  //   }
  return result;
}

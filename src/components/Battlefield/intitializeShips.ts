import { ShipType } from "../../types/ShipType";

export function intitializeShips(fieldSize: number) {
  let shipCount = 3;
  let shipSize = 3;
  let ships: ShipType = {};

  LoopForI: for (let i = 0; i < shipCount; i++) {
    let isItHorizontal = isHorizontal();
    let numberHorizontal = randomPositionNumber(fieldSize, shipSize);
    let numberVertical = randomPositionNumber(fieldSize, shipSize);

    if (isItHorizontal) {
      ships[`ship${i}`] = {
        positions: [
          `${numberHorizontal}${numberVertical}`,
          `${numberHorizontal + 1}${numberVertical}`,
          `${numberHorizontal + 2}${numberVertical}`,
        ],
        hits: ["", "", ""],
      };
    } else {
      ships[`ship${i}`] = {
        positions: [
          `${numberHorizontal}${numberVertical}`,
          `${numberHorizontal}${numberVertical + 1}`,
          `${numberHorizontal}${numberVertical + 2}`,
        ],
        hits: ["", "", ""],
      };
    }

    for (let j = 0; j < i; j++) {
      for (let k = 0; k < shipSize; k++) {
        if (
          ships[`ship${j}`].positions.includes(ships[`ship${i}`].positions[k])
        ) {
          i -= 1;
          continue LoopForI;
        }
      }
    }
  }

  return ships;
}

function isHorizontal() {
  return Math.ceil(Math.random() * 2) === 1 ? false : true;
}

function randomPositionNumber(fieldSize: number, shipSize: number) {
  return Math.floor(Math.random() * (fieldSize + 1 - shipSize));
}

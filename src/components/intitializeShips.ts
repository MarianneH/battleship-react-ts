export function intitializeShips(fieldSize: number) {
  let shipCount = 3;
  let shipSize = 3;
  let ships: string[][] = [];

  LoopForI: for (let i = 0; i < shipCount; i++) {
    let ship: string[] = [];

    let direction = isHorizontal();

    let numberHorizontal = randomNumber(fieldSize, shipSize);
    let numberVertical = randomNumber(fieldSize, shipSize);

    if (direction) {
      ship = [
        `${numberHorizontal}${numberVertical}`,
        `${numberHorizontal + 1}${numberVertical}`,
        `${numberHorizontal + 2}${numberVertical}`,
      ];
    } else {
      ship = [
        `${numberHorizontal}${numberVertical}`,
        `${numberHorizontal}${numberVertical + 1}`,
        `${numberHorizontal}${numberVertical + 2}`,
      ];
    }

    for (let j = 0; j < ships.length; j++) {
      for (let k = 0; k < ship.length; k++) {
        if (ships[j].includes(ship[k])) {
          console.log("Hello");
          i -= 1;
          continue LoopForI;
        }
      }
    }

    ships.push(ship);
  }

  return ships;
}

function isHorizontal() {
  return Math.ceil(Math.random() * 2) === 1 ? false : true;
}

function randomNumber(fieldSize: number, shipSize: number) {
  return Math.floor(Math.random() * (fieldSize + 1 - shipSize));
}

export function getFullySunkenShips(ships: string[][], hits: string[]) {
  let result: string[][] = [];

  for (let i = 0; i < ships.length; i++) {
    let count = 0;
    for (let j = 0; j < ships[i].length; j++) {
      if (hits.includes(ships[i][j])) {
        count += 1;
      }
    }

    if (count === 3) {
      result.push(ships[i]);
    }
  }
  return result;
}

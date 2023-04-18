export function isShipHit(ships: string[][], field: string) {
  let isShipHit = false;
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].includes(field)) {
      isShipHit = true;
    }
  }
  return isShipHit;
}

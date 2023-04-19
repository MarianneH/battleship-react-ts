import { ShipType } from "./ShipType";

export interface GameModelType {
  boardSize: number;
  numShips: number;
  shipLength: number;
  shipsSunk: null | string[][];
  ships: null | ShipType;
}

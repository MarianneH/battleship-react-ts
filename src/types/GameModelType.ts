import { ShipType } from "./ShipType";

export interface GameModelType {
  boardSize: number;
  numShips: number;
  shipLength: number;
  shipsSunk: number;
  tries: number;
  hits: number;
}

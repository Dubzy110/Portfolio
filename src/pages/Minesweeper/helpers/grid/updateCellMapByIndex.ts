import { Cell } from "../../Types/Cell";
import { combineObjectsShallow } from "../../utils/combineObjectsShallow";

export const updateCellMapByIndex =
  (index: number, updates: Partial<Cell>) => (cellMap: Cell[]) => {
    cellMap[index] = combineObjectsShallow(cellMap[index], updates) as Cell;
    return [...cellMap];
  };

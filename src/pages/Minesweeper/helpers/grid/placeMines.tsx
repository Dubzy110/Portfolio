import { cellRatio } from "../../constants/gridConstants";
import { Cell } from "../../Types/Cell";
import { getRandomNumberUpToMax } from "../../utils/getRandomNumberUpToMax";

export const placeMines = (grid: Cell[], cellTotal: number): Cell[] => {
  const mineTotal = Math.round(cellTotal * cellRatio);
  let counter = 0;
  while (counter < mineTotal) {
    const mineIndex = getRandomNumberUpToMax(cellTotal);

    if (grid[mineIndex].isMine) {
      continue;
    }
    grid[mineIndex].isMine = true;
    counter++;
  }
  return grid;
};

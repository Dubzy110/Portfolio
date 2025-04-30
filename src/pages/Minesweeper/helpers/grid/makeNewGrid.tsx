import { Cell } from "../../Types/Cell";

import { makeNewCell } from "../cell/makeNewCell";
import { placeMines } from "./placeMines";

type MakeNewGrid = (cellTotal: number) => Cell[];

export const MakeNewGrid: MakeNewGrid = (cellTotal: number) =>
  placeMines(
    [...Array(cellTotal)].map((_, i) => makeNewCell(i)),
    cellTotal
  );

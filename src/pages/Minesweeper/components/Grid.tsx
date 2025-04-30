import Cells from "./Cells";
import { Cell } from "../Types/Cell";

import { useState, useEffect, useCallback } from "react";

import { checkIfAllFlagged } from "../helpers/checkIfAllFlagged";
import { getSurroundingCells } from "../helpers/getSurroundingCells";
import { MakeNewGrid } from "../helpers/grid/makeNewGrid";
import { updateArrayProps } from "../helpers/updateArrayProps";
import { updateCellMapByIndex } from "../helpers/grid/updateCellMapByIndex";

import { cellsPerRowMap } from "../constants/gridConstants";
import { selectGridState } from "../../../state/reducers";
import { useAppSelector } from "../../../state";

const Grid = () => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState("");
  const gridState = useAppSelector(selectGridState);
  const cellsPerRow = cellsPerRowMap[gridState.difficulty];
  const cellTotal = cellsPerRow ** 2;

  const [cellMap, setCellMap] = useState<Cell[]>([]);
  const [isWon, setIsWon] = useState(false);

  const reset = useCallback(() => {
    setGridTemplateColumns(`repeat(${cellsPerRow}, 44px)`);
    setIsWon(false);
    setCellMap(MakeNewGrid(cellTotal));
  }, [cellTotal, gridState.difficulty]);

  useEffect(() => {
    reset();
  }, [cellsPerRow, gridState.difficulty, reset]);

  const calculateSurroundingCellsMineCounts = (
    cellIndex: number,
    alreadyCheckedCells: number[] = [],
    cellMapParam: Cell[] = cellMap
  ) => {
    if (alreadyCheckedCells.includes(cellIndex)) {
      return;
    }
    alreadyCheckedCells.push(cellIndex);
    const currentCell = cellMapParam[cellIndex];

    const surroundingCellIndexes: number[] = getSurroundingCells(
      cellIndex,
      cellsPerRow,
      cellTotal
    );

    const mineCount = surroundingCellIndexes.reduce(
      (accum: number, surroundingCellIndexes: number) => {
        return accum + (cellMapParam[surroundingCellIndexes].isMine ? 1 : 0);
      },
      0
    );

    setCellMap(
      updateCellMapByIndex(cellIndex, {
        isRevealed: true,
        mineCount,
      })
    );

    if (mineCount > 0) {
      return;
    }
    surroundingCellIndexes.forEach((cellIndex: number) => {
      calculateSurroundingCellsMineCounts(
        cellIndex,
        alreadyCheckedCells,
        cellMapParam
      );
    });
  };

  const winCondition = () => {
    setCellMap(updateArrayProps({ isTevealed: true }));
    setIsWon(true);
    setTimeout(() => {
      // alert("You Win!");
    }, 500);
  };

  useEffect(() => {
    if (!cellMap.length) {
      return;
    }
    if (isWon) {
      return;
    }
    if (checkIfAllFlagged(cellMap)) {
      winCondition();
    }
  }, [cellMap]);

  const loseGame = () => {
    setCellMap(updateArrayProps({ isFlagged: false, isRevealed: true }));
    setTimeout(() => {
      alert("Game Over!");
    });
  };

  const markFlag = (i: number, boolean: boolean) => {
    setCellMap(updateCellMapByIndex(i, { isFlagged: boolean }));
  };

  const markRevealed = (i: number) => {
    console.log("cell: ", i);
    setCellMap(updateCellMapByIndex(i, { isRevealed: true }));
  };

  const otherConfig = {
    loseGame,
    markFlag,
    markRevealed,
    calculateSurroundingCellsMineCounts,
  };

  return (
    <>
      <div
        className={`flex flex-col flex-grow m-auto pt-[75px] overflow-auto w-full`}
      >
        <div className="w-max overflow-auto m-auto">
          <div
            className={`grid gap-0 border-2 border-r-6 border-gray-500 content-center`}
            style={{ gridTemplateColumns }}
          >
            {cellMap.map((cellConfig: Cell, index: number) => (
              <Cells config={{ ...cellConfig, ...otherConfig }} key={index} />
            ))}
          </div>
          <div
            className={`flex justify-center w-full m-auto rounded-2xl bg-red-500 border-2 hover:bg-red-600 border-red-400 hover:border-red-500 mt-5`}
          >
            <button className=" w-full" onClick={() => reset()}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;

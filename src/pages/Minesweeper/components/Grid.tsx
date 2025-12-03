import { useCallback, useEffect, useState } from 'react'

import { selectGridState, useAppSelector } from '../../../state'
import { cellsPerRowMap } from '../constants'
import {
  checkIfAllFlagged,
  getSurroundingCells,
  MakeNewGrid,
  updateArrayProps,
  updateCellMapByIndex,
} from '../helpers'
import type { Cell } from '../Types'
import { Cells } from './Cells'

export const Grid = () => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState('')
  const gridState = useAppSelector(selectGridState)
  const cellsPerRow = cellsPerRowMap[gridState.difficulty]
  const cellTotal = cellsPerRow ** 2

  const [cellMap, setCellMap] = useState<Cell[]>([])
  const [isWon, setIsWon] = useState(false)

  const reset = useCallback(() => {
    setGridTemplateColumns(`repeat(${cellsPerRow}, 44px)`)
    setIsWon(false)
    setCellMap(MakeNewGrid(cellTotal))
  }, [cellTotal, cellsPerRow])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <useEffect only needs to run on cellsPerRow change>
  useEffect(() => {
    reset()
  }, [cellsPerRow, reset])

  const calculateSurroundingCellsMineCounts = (
    cellIndex: number,
    alreadyCheckedCells: number[] = [],
    cellMapParam: Cell[] = cellMap,
  ) => {
    if (alreadyCheckedCells.includes(cellIndex)) {
      return
    }
    alreadyCheckedCells.push(cellIndex)

    const surroundingCellIndexes: number[] = getSurroundingCells(
      cellIndex,
      cellsPerRow,
      cellTotal,
    )

    const mineCount = surroundingCellIndexes.reduce(
      (accum: number, surroundingCellIndexes: number) => {
        return accum + (cellMapParam[surroundingCellIndexes].isMine ? 1 : 0)
      },
      0,
    )

    setCellMap(
      updateCellMapByIndex(cellIndex, {
        isRevealed: true,
        mineCount,
      }),
    )

    if (mineCount > 0) {
      return
    }
    surroundingCellIndexes.forEach((cellIndex: number) => {
      calculateSurroundingCellsMineCounts(
        cellIndex,
        alreadyCheckedCells,
        cellMapParam,
      )
    })
  }

  const winCondition = () => {
    setCellMap(updateArrayProps({ isRevealed: true }))
    setIsWon(true)
    setTimeout(() => {
      // alert("You Win!");
    }, 500)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <only needs to run on cellMap change>
  useEffect(() => {
    if (!cellMap.length) {
      return
    }
    if (isWon) {
      return
    }
    if (checkIfAllFlagged(cellMap)) {
      winCondition()
    }
  }, [cellMap])

  const loseGame = () => {
    setCellMap(updateArrayProps({ isFlagged: false, isRevealed: true }))
    setTimeout(() => {
      alert('Game Over!')
    })
  }

  const markFlag = (i: number, boolean: boolean) => {
    setCellMap(updateCellMapByIndex(i, { isFlagged: boolean }))
  }

  const markRevealed = (i: number) => {
    console.log('cell: ', i)
    setCellMap(updateCellMapByIndex(i, { isRevealed: true }))
  }

  return (
    <div className={`flex flex-col m-auto pt-[75px] overflow-auto w-full`}>
      <div className="w-max overflow-auto m-auto">
        <div
          className={`grid gap-0 border-2 border-r-6 border-gray-500 content-center`}
          style={{ gridTemplateColumns }}
        >
          {cellMap.map((cell: Cell, index: number) => (
            <Cells
              props={{
                cellIndex: index,
                isFlagged: cell.isFlagged,
                isMine: cell.isMine,
                isRevealed: cell.isRevealed,
                mineCount: cell.mineCount,
                calculateSurroundingCellsMineCounts,
                loseGame,
                markFlag,
                markRevealed,
              }}
              key={`${index + 1}`}
            />
          ))}
        </div>
        <div
          className={`flex justify-center w-full m-auto rounded-2xl bg-red-500 border-2 hover:bg-red-600 border-red-400 hover:border-red-500 mt-5`}
        >
          <button type="reset" className=" w-full" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

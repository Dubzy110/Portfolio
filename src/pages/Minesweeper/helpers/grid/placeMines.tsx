import { cellRatio } from '../../constants'
import type { Cell } from '../../Types'
import { getRandomNumberUpToMax } from '../../utils'

export const placeMines = (grid: Cell[], cellTotal: number): Cell[] => {
  const mineTotal = Math.round(cellTotal * cellRatio)
  let counter = 0
  while (counter < mineTotal) {
    const mineIndex = getRandomNumberUpToMax(cellTotal)

    if (grid[mineIndex].isMine) {
      continue
    }
    grid[mineIndex].isMine = true
    counter++
  }
  return grid
}

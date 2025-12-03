import type { Cell } from '../../Types'

import { combineObjectsShallow } from '../../utils'

export const updateCellMapByIndex =
  (index: number, updates: Partial<Cell>) => (cellMap: Cell[]) => {
    cellMap[index] = combineObjectsShallow(cellMap[index], updates) as Cell
    return [...cellMap]
  }

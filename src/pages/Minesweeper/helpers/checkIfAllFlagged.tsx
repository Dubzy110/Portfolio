import type { Cell } from '../Types'

export const checkIfAllFlagged = (cellMap: Cell[]) => {
  for (let i = 0; i < cellMap.length; i++) {
    if (!cellMap[i].isMine && cellMap[i].isFlagged) {
      return false
    }
    if (cellMap[i].isMine && !cellMap[i].isFlagged) {
      return false
    }
  }
  return true
}

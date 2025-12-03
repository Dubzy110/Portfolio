import type { Cell } from '../../Types'

export const makeNewCell = (cellIndex: number): Cell => ({
  isMine: false,
  isFlagged: false,
  isRevealed: false,
  cellIndex,
  mineCount: 0,
  key: `${cellIndex}`,
  id: Math.random() * 1_000_000,
})

export type Cell = {
  isMine: boolean
  isFlagged: boolean
  isRevealed: boolean
  cellIndex: number
  mineCount: number
  key: string
  id: number
}

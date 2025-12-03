type CellProps = {
  props: {
    cellIndex: number
    isFlagged: boolean
    isRevealed: boolean
    isMine: boolean
    mineCount: number
    markFlag: (index: number, flagStatus: boolean) => void
    markRevealed: (index: number) => void
    calculateSurroundingCellsMineCounts: (index: number) => void
    loseGame: () => void
  }
}

export const Cells = ({
  props: {
    cellIndex,
    isFlagged,
    isMine,
    isRevealed,
    mineCount,
    calculateSurroundingCellsMineCounts,
    loseGame,
    markFlag,
    markRevealed,
  },
}: CellProps) => {
  const cellClick = (e: { button: number; shiftKey: boolean }) => {
    if (e.button === 0 && e.shiftKey && !isRevealed) {
      markFlag(cellIndex, !isFlagged)
      return
    } else if (e.button === 0 && !e.shiftKey && !isFlagged && !isRevealed) {
      markRevealed(cellIndex)
      if (!isMine) {
        calculateSurroundingCellsMineCounts(cellIndex)
      }
      if (
        (!isRevealed && isMine && !isFlagged) ||
        (isRevealed && isMine && !isFlagged)
      ) {
        console.log('lost')
        setTimeout(() => {
          loseGame()
        }, 200)
      }
    }
  }

  const flag = 'text-green-400 bg-green-900'
  const mine = 'text-red-800 bg-red-500'
  const revealed = 'text-gray-300 bg-gray-600'

  return (
    <button
      type="button"
      className={`text-center border-2 border-black  2-[48px] content-center ${
        isFlagged
          ? flag
          : isMine && isRevealed
            ? mine
            : isRevealed
              ? revealed
              : 'text-gray-300 bg-gray-200'
      }`}
      onClick={cellClick}
    >
      {isFlagged
        ? 'F'
        : !isRevealed
          ? ' '
          : isMine
            ? '*'
            : mineCount
              ? `${mineCount}`
              : '-'}
    </button>
  )
}

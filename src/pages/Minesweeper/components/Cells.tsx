const Cells = (props: any) => {
  const cellClick = (e: { button: number; shiftKey: boolean }) => {
    if (e.button === 0 && e.shiftKey && !props.config.isRevealed) {
      props.config.markFlag(props.config.cellIndex, !props.config.isFlagged);
      return;
    } else if (
      e.button === 0 &&
      !e.shiftKey &&
      !props.config.isFlagged &&
      !props.config.isRevealed
    ) {
      props.config.markRevealed(props.config.cellIndex);
      if (!props.config.isMine) {
        props.config.calculateSurroundingCellsMineCounts(
          props.config.cellIndex
        );
      }
      if (
        (!props.config.isRevealed &&
          props.config.isMine &&
          !props.config.isFlagged) ||
        (props.config.isRevealed &&
          props.config.isMine &&
          !props.config.isFlagged)
      ) {
        console.log("lost");
        setTimeout(() => {
          props.config.loseGame();
        }, 200);
      }
    }
  };

  let flag = "text-green-400 bg-green-900";
  let mine = "text-red-800 bg-red-500";
  let revealed = "text-gray-300 bg-gray-600";

  return (
    <button
      className={`text-center border-2 border-black  2-[48px] h-[48px] max-h-[48px] min-w-[48px] content-center ${
        props.config.isFlagged
          ? flag
          : props.config.isMine && props.config.isRevealed
          ? mine
          : props.config.isRevealed
          ? revealed
          : "text-gray-300 bg-gray-200"
      }`}
      onClick={cellClick}
    >
      {props.config.isFlagged
        ? "F"
        : !props.config.isRevealed
        ? " "
        : props.config.isMine
        ? "*"
        : props.config.mineCount
        ? `${props.config.mineCount}`
        : "-"}
    </button>
  );
};

export default Cells;

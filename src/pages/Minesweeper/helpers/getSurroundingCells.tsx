export const getSurroundingCells = (
  cellIndex: number,
  cellsPerRow: number,
  cellTotal: number
): number[] => {
  const result = [];

  const hasLeft = cellIndex % cellsPerRow !== 0;
  if (hasLeft) {
    result.push(cellIndex - 1);
  }

  const hasUp = cellIndex - cellsPerRow > -1;
  if (hasUp) {
    result.push(cellIndex - cellsPerRow);
  }

  const hasRight = cellIndex % cellsPerRow !== cellsPerRow - 1;
  if (hasRight) {
    result.push(cellIndex + 1);
  }

  const hasDown = cellIndex + cellsPerRow < cellTotal;
  if (hasDown) {
    result.push(cellIndex + cellsPerRow);
  }

  //

  const hasUpLeft = hasUp && hasLeft;
  if (hasUpLeft) {
    result.push(cellIndex - cellsPerRow - 1);
  }

  const hasUpRight = hasUp && hasRight;
  if (hasUpRight) {
    result.push(cellIndex - cellsPerRow + 1);
  }

  const hasDownLeft = hasDown && hasLeft;
  if (hasDownLeft) {
    result.push(cellIndex + cellsPerRow - 1);
  }

  const hasDownRight = hasDown && hasRight;
  if (hasDownRight) {
    result.push(cellIndex + cellsPerRow + 1);
  }

  return result;
};

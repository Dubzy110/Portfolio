import type { Cell } from '../Types'

export const updateArrayProps =
  (props?: Record<string, boolean>) => (cellMap: Cell[]) => {
    const newArray = cellMap.map((val) => ({
      ...val,
      ...props,
    }))
    return newArray
  }

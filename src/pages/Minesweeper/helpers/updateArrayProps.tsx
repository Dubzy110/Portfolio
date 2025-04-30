import { Cell } from "../Types/Cell";

export const updateArrayProps =
  (props?: Record<string, any>) => (cellMap: Cell[]) => {
    let newArray = cellMap.map((val) => ({
      ...val,
      ...props,
    }));
    return newArray;
  };

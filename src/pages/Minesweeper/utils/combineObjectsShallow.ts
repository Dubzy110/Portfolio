import { Obj } from "../Types/common";

export const combineObjectsShallow = (...args: Obj[]) =>
  args.reduce((accum, obj) => ({
    ...accum,
    ...obj,
  }));

export const combineObjectsShallow = (...args) =>
  args.reduce(
    (accum, obj) => ({
      accum,
      ...obj,
    }),
    {},
  )

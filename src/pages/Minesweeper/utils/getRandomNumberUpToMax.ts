export const getRandomNumberUpToMax = (max: number) => {
  const result: number = Math.floor(Math.random() * (max - 1));
  return result;
};

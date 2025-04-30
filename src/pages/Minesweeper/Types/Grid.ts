export type Difficulty = "easy" | "medium" | "hard";

export type ClassData = {
  boxClasses: string[];
  gridClasses?: string;
  cellClass?: string;
  gridContainer?: string;
  containerClass?: string;
};

export type Props = {
  gridItems: any[];
  classData: ClassData;
};

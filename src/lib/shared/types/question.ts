export enum Complexity {
  EASY = 0,
  MEDIUM = 1,
  HARD = 2,
  VERY_HARD = 3,
}

export interface Question {
  id: string;
  name: string;
  complexity: Complexity;
  prompt: string;
}

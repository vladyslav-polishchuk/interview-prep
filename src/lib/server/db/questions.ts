import { questions } from "../../../../scripts/questions";

export const read = (id?: string) => {
  if (id) {
    return questions.find((question) => question.id === id);
  }

  return questions;
};

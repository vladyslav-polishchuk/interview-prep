import { Questions } from '../schema';

export const getQuestions = async () => {
  return await Questions.find();
};

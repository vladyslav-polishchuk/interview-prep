import mongoose from 'mongoose';
import { QUESTIONS_TABLE_NAME } from '../schema';
import connectToDb from '../connect';
import type { PaginatedResult, Question } from '../../interfaces';

interface GetQuestionsOptions {
  page?: number;
  perPage?: number;
}

const Questions = mongoose.model(QUESTIONS_TABLE_NAME);

export const getQuestions = async (
  options: GetQuestionsOptions = {}
): Promise<PaginatedResult<Question[]>> => {
  await connectToDb();

  const { page = 1, perPage = 10 } = options;

  const questions = await Questions.find<Question>()
    .limit(perPage)
    .skip(perPage * (page - 1));

  const total = await Questions.countDocuments();

  return { data: questions, total };
};

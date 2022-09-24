import mongoose from 'mongoose';
import { QUESTIONS_TABLE_NAME } from '../schema';
import connectToDb from '../connect';
import type {
  PaginatedResult,
  PaginationParams,
  Question,
  QuestionStatus,
} from '../../interfaces';

interface FilterCriteria {
  status?: QuestionStatus;
  role?: string;
  section?: string;
}
type GetQuestionsOptions = FilterCriteria & PaginationParams;

const Questions = mongoose.model(QUESTIONS_TABLE_NAME);

export const getQuestions = async (
  options: GetQuestionsOptions,
): Promise<PaginatedResult<Question[]>> => {
  await connectToDb();

  const { page = 1, perPage = 10 } = options;

  const query: FilterCriteria = ['role', 'section', 'status'].reduce(
    (acc, prop) => {
      if (options[prop]) {
        acc[prop] = options[prop];
      }

      return acc;
    },
    {},
  );

  const questions = await Questions.find<Question>(query)
    .limit(perPage)
    .skip(perPage * (page - 1));

  const total = await Questions.countDocuments(query);

  return { data: questions, total };
};

export const deleteQuestions = async (questionIds: string[]) => {
  await connectToDb();
  // @ts-ignore
  const ids = questionIds.map((id) => mongoose.Types.ObjectId(id));
  const result = await Questions.deleteMany({ _id: { $in: ids } });

  return result;
};

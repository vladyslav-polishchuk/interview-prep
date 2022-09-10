import mongoose from 'mongoose';
import { QUESTIONS_TABLE_NAME } from '../schema';
import connectToDb from '../connect';
import type { PaginatedResult, Question } from '../../interfaces';

interface FilterCriteria {
  role?: string;
  section?: string;
}

interface GetQuestionsOptions extends FilterCriteria {
  page?: number;
  perPage?: number;
}

const Questions = mongoose.model(QUESTIONS_TABLE_NAME);

export const getQuestions = async (
  options: GetQuestionsOptions = {}
): Promise<PaginatedResult<Question[]>> => {
  await connectToDb();

  const { page = 1, perPage = 10, role, section } = options;

  const query: FilterCriteria = {};
  if (role) {
    query.role = role;
  }
  if (section) {
    query.section = section;
  }

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
  const result = await Questions.deleteMany({_id: {$in: ids}});
  
  return result;
};

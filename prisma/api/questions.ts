import prisma from '..';
import type {
  PaginatedResult,
  PaginationParams,
  Question,
} from '../../interfaces';

interface GetQuestionsOptions extends PaginationParams {
  where: Partial<Question>;
  orderBy?: Record<string, 'asc' | 'desc'>;
}

export const getQuestions = async (
  options: GetQuestionsOptions,
): Promise<PaginatedResult<Question[]>> => {
  const { page = 1, perPage = 10, orderBy } = options;

  const where = Object.keys(options.where).reduce((acc, prop) => {
    if (options.where[prop]) {
      acc[prop] = options.where[prop];
    }

    return acc;
  }, {});
  const skip = perPage * (page - 1);
  const take = perPage;
  const questions = await prisma.question.findMany({
    skip,
    take,
    where,
    orderBy,
  });
  const total = await prisma.question.count();

  // @ts-ignore
  return { data: questions, total };
};

export const updateQuestion = async (
  question: Partial<Question>,
): Promise<Question> => {
  const updatedQuestion = await prisma.question.update({
    where: {
      id: question.id,
    },
    data: question,
  });

  return updatedQuestion as Question;
};

export const deleteQuestions = async (questionIds: string[]) => {
  const queries = questionIds.map((questionId) =>
    prisma.question.deleteMany({
      where: {
        id: questionId,
      },
    }),
  );

  return await Promise.all(queries);
};

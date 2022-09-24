import { useQuery } from 'react-query';
import type { PaginatedResult, Question } from '../../interfaces';

interface UseQuestionsProps {
  page: number;
}

const fetchQuestions = async (page): Promise<PaginatedResult<Question[]>> => {
  const response = await fetch(`../api/questions?page=${page || 1}`);
  return await response.json();
};

const useQuestions = (props: UseQuestionsProps) => {
  const { page } = props;

  return useQuery<PaginatedResult<Question[]>>(
    ['questions', 'user', page],
    () => fetchQuestions(page),
    {},
  );
};

export default useQuestions;

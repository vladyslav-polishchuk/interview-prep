import { useQuery } from 'react-query';
import type {
  PaginatedResult,
  PaginationParams,
  Question,
  QuestionStatus,
} from '../../interfaces';

interface UseQuestionsProps extends PaginationParams {
  status?: QuestionStatus;
}

const fetchQuestions = async (props): Promise<PaginatedResult<Question[]>> => {
  const queryParams = new URLSearchParams();
  Object.entries(props).forEach(([name, value]) => {
    queryParams.set(name, `${value}`);
  });

  const url = `../api/questions?${queryParams}`;
  const response = await fetch(url);

  return await response.json();
};

const useQuestions = (props: UseQuestionsProps) => {
  return useQuery<PaginatedResult<Question[]>>(
    ['questions', props.page, props.perPage, props.status],
    () => fetchQuestions(props),
    {},
  );
};

export default useQuestions;

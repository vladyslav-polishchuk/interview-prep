import { useInfiniteQuery, useQuery } from 'react-query';
import type {
  PaginatedResult,
  PaginationParams,
  Question,
  QuestionStatus,
} from '../../types';

interface UseQuestionsProps extends PaginationParams {
  status?: QuestionStatus;
}

export const fetchQuestions = async (
  props,
): Promise<PaginatedResult<Question[]>> => {
  const queryParams = new URLSearchParams();
  Object.entries(props).forEach(([name, value]) => {
    queryParams.set(name, `${value}`);
  });

  const url = `../api/questions?${queryParams}`;
  const response = await fetch(url);

  return await response.json();
};

export const useQuestions = (props: UseQuestionsProps) => {
  return useQuery<PaginatedResult<Question[]>>(
    ['questions', props.page, props.perPage, props.status],
    () => fetchQuestions(props),
    {},
  );
};

export const useInfiniteQuestions = (props: UseQuestionsProps) => {
  return useInfiniteQuery<PaginatedResult<Question[]>>(
    ['questions', props.page, props.perPage, props.status],
    ({ pageParam }) =>
      fetchQuestions({ ...props, page: pageParam ?? props.page }),
    {
      getNextPageParam: (lastPage, allPages = []) => {
        if (lastPage.data.length === props.perPage) {
          return allPages.length + 1;
        }
      },
    },
  );
};

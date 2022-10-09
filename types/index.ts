// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type QuestionStatus = 'draft' | 'published';

export interface Question {
  id: string;
  role: 'junior' | 'middle' | 'senior';
  section: 'general' | 'js' | 'react' | 'frontend' | 'backend' | 'database';
  title: string;
  answer: string;
  status: QuestionStatus;
}

export interface PaginatedResult<T> {
  data: T;
  total: number;
}

export interface PaginationParams {
  page: number;
  perPage: number;
}

// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Question {
  role: 'junior' | 'middle' | 'senior';
  section: 'general' | 'js' | 'react' | 'frontend' | 'backend';
  title: string;
  answer: string;
}

export interface PaginatedResult<T> {
  data: T;
  total: number;
}

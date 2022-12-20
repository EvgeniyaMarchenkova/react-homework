import { Genre } from './genre';

export interface MoviesQueryParams {
  search: string;
  sortOrder: 'asc';
  sortBy: SortOrder;
  filter: Genre;
}

export enum SortOrder {
  Increase = 'asc',
  Descrise = 'dsc',
}

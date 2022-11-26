import { Genre } from './genre';

export interface Filter {
  searchText?: string;
  genre?: Genre;
}
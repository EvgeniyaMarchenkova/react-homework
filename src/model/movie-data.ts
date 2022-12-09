import { Genre } from './genre';

export interface MovieData {
  title: string;
  genres: Genre[];
  budget: number;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

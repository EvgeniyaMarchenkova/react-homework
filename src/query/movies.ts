import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieData } from '../model';
import { MoviesQueryParams } from '../model/movies-query-params';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  endpoints: (builder: any) => ({
    getMovies: builder.query({
      query: (args: MoviesQueryParams) => {
        return {
          url: 'movies/',
          params: { ...args },
        };
      },
    }),
    addMovie: builder.mutation({
      query: (movie: MovieData) => ({
        url: '/movies',
        method: 'POST',
        body: movie,
      }),
    }),
    editMovie: builder.mutation({
      query: (data: MovieData) => ({
        url: '/movies',
        method: 'PUT',
        body: data,
      }),
    }),
    deleteMovie: builder.mutation({
      query: (id: string) => ({
        url: `/movies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useDeleteMovieMutation,
  useEditMovieMutation,
  useAddMovieMutation,
} = moviesApi;

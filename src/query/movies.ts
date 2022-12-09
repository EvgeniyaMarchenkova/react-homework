import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Genre, MovieData, SearchBy } from '../model';
import { MoviesQueryParams } from '../model/movies-query-params';
import { selectSearch, selectSearchBy } from '../store/filterSlice';
import { useAppSelector } from '../store/hooks';

export const moviesApi: any = createApi({
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
      // query: ({ id, ...rest }) => ({
      //   url: `/movies/${id}`,
      //   method: 'PUT',
      //   body: rest,
      // }),
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

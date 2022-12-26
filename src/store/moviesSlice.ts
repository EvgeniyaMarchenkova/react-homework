import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { MovieData } from '../model';

interface MoviesState {
  selectedMovie: MovieData;
}

const initialState: MoviesState = {
  selectedMovie: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie: (
      state: MoviesState,
      action: PayloadAction<MovieData>,
    ) => {
      state.selectedMovie = action.payload;
    },
    resetSelectedMovie: (state: MoviesState) => {
      state.selectedMovie = null;
    },
  },
});

export const { setSelectedMovie, resetSelectedMovie } = moviesSlice.actions;

export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;

export default moviesSlice.reducer;

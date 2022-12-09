import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { Genre, MovieData } from '../model';

interface MoviesState {
  list: MovieData[];
  selectedMovie: MovieData;
}

const initialState: MoviesState = {
  list: [],
  selectedMovie: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state: MoviesState, action: PayloadAction<MovieData[]>) => {
      state.list = action.payload;
    },
    setSelectedMovie: (
      state: MoviesState,
      action: PayloadAction<MovieData>,
    ) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setSelectedMovie, setMovies } = moviesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movies.list;
export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;

export default moviesSlice.reducer;

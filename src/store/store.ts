import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import filterReducer from './filterSlice';
import { moviesApi } from '../query/movies';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

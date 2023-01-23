import reducer, { setSelectedMovie } from './../../src/store/moviesSlice';

test('should handle a todo being added to an empty list', () => {
  const movieData = {
    title: 'string',
    overview: 'string',
    poster_path: 'string',
    runtime: 22,
  };
  const previousState: any = { selectedMovie: null };
  expect(reducer(previousState, setSelectedMovie(movieData))).toEqual({
    selectedMovie: movieData,
  });
});

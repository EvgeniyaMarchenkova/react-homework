import { useAppSelector } from '../store/hooks';
import { selectSelectedMovie } from '../store/moviesSlice';

export function useMovieService() {
  const selectedMovie = useAppSelector(selectSelectedMovie);

  const deleteMovie = () => {
    console.log('delete', selectedMovie);
    // setMovies(movies.filter((movie) => movie.title !== selectedMovie.title));
  };

  const addMovie = () => {
    console.log('add');
  };

  const editMovie = () => {
    console.log('update', selectedMovie);
  };

  return {
    deleteMovie,
    addMovie,
    editMovie,
  };
}

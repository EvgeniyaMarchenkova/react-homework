import { useState, useEffect } from 'react';
import { Genre, MovieData } from '../model';

const INITIAL_MOVIE_LIST = [
  {
    title: 'DOCUMENTARY 1',
    genre: Genre.Documentary,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a cursus massa, nec volutpat ligula. Curabitur a urna sagittis, consequat augue sit amet, sollicitudin arcu. Donec at sapien vestibulum, aliquet magna in, consequat leo. Donec blandit rhoncus tincidunt. Nulla facilisi. Phasellus dolor lacus, laoreet et feugiat a, dapibus nec velit. Aenean sodales nunc nec fermentum imperdiet. Maecenas eu nibh vitae elit feugiat porttitor nec at mi. Donec fermentum risus vitae velit porta euismod. Praesent non tortor ante.',
  },
  {
    title: 'COMEDY 1',
    genre: Genre.Comedy,
    description:
      'Morbi consectetur nibh placerat eros porttitor, a dapibus sapien iaculis. Sed ultrices, quam in tincidunt tempus, lorem ante vulputate sem, eu laoreet felis orci a sem. Duis cursus eu ex ac lobortis. Donec libero tortor, aliquam sed justo ut, feugiat mollis nunc. Cras rhoncus sapien et vestibulum bibendum. Curabitur vel sollicitudin libero. Sed mollis augue ipsum, at egestas arcu mattis rutrum.',
  },
  {
    title: 'DOCUMENTARY 2',
    genre: Genre.Documentary,
    description:
      'Integer hendrerit massa vel imperdiet mattis. Aenean eget mauris enim. Maecenas rhoncus sapien non tempus pellentesque. Ut accumsan mauris lectus, condimentum porttitor libero tincidunt in. Vivamus a enim blandit elit vehicula viverra. In eleifend eros sit amet sapien aliquam, nec dapibus est bibendum. Integer dignissim, dolor dictum dapibus venenatis, leo lacus venenatis ex, eu condimentum felis diam nec mauris. Ut vulputate lacus sit amet porta ullamcorper. Ut cursus dolor orci, auctor consectetur erat euismod vel. In vitae est accumsan, lacinia lectus sit amet, sodales lorem.',
  },
  {
    title: 'DOCUMENTARY 3',
    genre: Genre.Documentary,
    description:
      'Donec nunc arcu, porttitor eget venenatis ac, venenatis non ex. Fusce eu neque nec dui fringilla tincidunt vitae sed risus. Nulla ligula dui, rutrum quis metus tempor, hendrerit dictum nulla. Maecenas ut orci iaculis, efficitur magna id, tempus velit. Praesent vitae enim ac justo ullamcorper commodo nec id turpis. Nam fringilla augue nec diam maximus eleifend. Pellentesque aliquam efficitur pharetra. Duis vestibulum dui vel nisi efficitur, sed egestas magna pulvinar. Cras vestibulum lacus nec purus molestie rhoncus. Aenean efficitur efficitur tortor, ut suscipit purus porttitor id.',
  },
  {
    title: 'COMEDY 4',
    genre: Genre.Comedy,
    description:
      'Sed cursus sem eu risus rhoncus mollis. Praesent non odio non diam sodales hendrerit a ut leo. Vivamus vel sagittis quam. Ut quis orci est. Aliquam mattis pulvinar magna, nec convallis ex vestibulum a. Nullam eros augue, tincidunt vitae tortor sed, accumsan tristique nisi. Maecenas pretium nisi et vulputate laoreet. Quisque dolor tortor, tincidunt ac pulvinar vel, gravida sit amet nunc. Integer quis arcu justo.',
  },
  {
    title: 'CRIME 2',
    genre: Genre.Crime,
    description:
      'Nam a ligula mollis, ornare dolor nec, egestas tortor. Aenean mollis, neque eu consectetur ornare, est nisl dignissim dolor, eget aliquam ligula nulla vitae tortor. Donec non euismod mi. Praesent blandit mi massa, vel rhoncus est consequat non. Phasellus ultrices dignissim nisi, sed pulvinar nisi fermentum a. Donec malesuada sem in tellus aliquam, eget ornare sapien lobortis. Cras interdum diam nisl, quis lacinia elit sagittis ut. Cras dictum, nisl non vulputate hendrerit, velit nulla gravida enim, ut imperdiet ipsum felis in felis.',
  },
];

export function useMovieService() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  useEffect(() => {
    setMovies(INITIAL_MOVIE_LIST);
  }, []);

  const deleteMovie = () => {
    console.log('delete', selectedMovie);
    setMovies(movies.filter((movie) => movie.title !== selectedMovie.title));
  };

  const addMovie = () => {
    console.log('add');
  };

  const editMovie = () => {
    console.log('update', selectedMovie);
  };

  const selectMovie = (movie: MovieData) => {
    setSelectedMovie(movie);
  };

  return {
    movies,
    deleteMovie,
    addMovie,
    editMovie,
    selectMovie,
  };
}

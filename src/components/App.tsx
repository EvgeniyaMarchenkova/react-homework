import React, { useState, createContext } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { ModalWindowType, MovieData, SearchBy } from './../model';
import ModalWindowOpener from './ModalWindowOpener';
import MovieDetails from './MovieDetils';
import { useMovieService } from '../hooks/useMovieService';
import { useGetMoviesQuery } from '../query/movies';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  selectMovies,
  selectSelectedMovie,
  setMovies,
} from '../store/moviesSlice';

export interface Handlers {
  addMovie: () => void;
  deleteMovie: (movie: MovieData) => void;
  updateMovie: (movie: MovieData) => void;
}

export const MovieContext = createContext(undefined);

const App = () => {
  const movies = useAppSelector(selectMovies);
  const selectedMovie = useAppSelector(selectSelectedMovie);

  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);
  const [isViewMode, setIsViewMode] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState();

  const queryParams = {
    search: searchText,
    searchBy: SearchBy.Title,
    sortOrder: 'asc',
    sortBy: sortBy,
    filter: selectedGenre,
  };
  const { data, error, isLoading, refetch } = useGetMoviesQuery(queryParams);

  const dispatch = useAppDispatch();
  dispatch(setMovies(data?.data));

  const { editMovie, addMovie, deleteMovie } = useMovieService();

  let MOVIE_HANDLERS = {
    delete: deleteMovie,
    add: addMovie,
    edit: editMovie,
  } as const;

  const onCloseModalWindowHandler = (isDataUpdated: boolean) => {
    console.log('onCloseModalWindowHandler', isDataUpdated);
    if (isDataUpdated) {
      refetch();
    }
    setModalWindowType(ModalWindowType.None);
  };

  return (
    <>
      {modalWindowType !== ModalWindowType.None && (
        <ModalWindowOpener
          movieHandlers={MOVIE_HANDLERS}
          type={modalWindowType}
          onCloseWindow={onCloseModalWindowHandler}
        />
      )}
      {isViewMode ? (
        <MovieDetails
          movie={selectedMovie}
          onSearchClick={() => setIsViewMode(false)}
        />
      ) : (
        <Header
          searchText={searchText}
          onChangedSearchText={setSearchText}
          openAddMovieWindow={() =>
            setModalWindowType(ModalWindowType.AddMovie)
          }
        />
      )}
      <ErrorBoundary>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <MainContent
            movies={movies}
            selectedGenre={selectedGenre}
            onChangeSort={setSortBy}
            onChangeSelectedGenre={setSelectedGenre}
            openModalWindow={(type: ModalWindowType) =>
              setModalWindowType(type)
            }
            switchViewMode={setIsViewMode}
          />
        ) : null}
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;

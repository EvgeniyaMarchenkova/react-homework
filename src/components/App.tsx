import React, { useState, createContext } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { ModalWindowType, MovieData } from './../model';
import ModalWindowOpener from './ModalWindowOpener';
import MovieDetails from './MovieDetils';
import { useMovieService } from '../hooks/useMovieService';

export interface Handlers {
  addMovie: () => void;
  deleteMovie: (movie: MovieData) => void;
  updateMovie: (movie: MovieData) => void;
}

export const MovieContext = createContext(undefined);

const App = () => {
  const {
    movies,
    editMovie,
    addMovie,
    deleteMovie,
    selectMovie,
  } = useMovieService();

  const [searchText, setSearchText] = useState('');
  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);
  const [isViewMode, setIsViewMode] = useState(false);

  let MOVIE_HANDLERS = {
    delete: deleteMovie,
    add: addMovie,
    edit: editMovie,
  } as const;

  return (
    <>
      <MovieContext.Provider value={movies}>
        {modalWindowType !== ModalWindowType.None && (
          <ModalWindowOpener
            movieHandlers={MOVIE_HANDLERS}
            type={modalWindowType}
            onCloseWindow={() => setModalWindowType(ModalWindowType.None)}
          />
        )}
        {isViewMode ? (
          <MovieDetails onSearchClick={() => setIsViewMode(false)} />
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
          <MainContent
            movies={movies}
            searchText={searchText}
            openModalWindow={(type: ModalWindowType) =>
              setModalWindowType(type)
            }
            switchViewMode={setIsViewMode}
            selectMovie={selectMovie}
          />
        </ErrorBoundary>
      </MovieContext.Provider>
      <Footer />
    </>
  );
};

export default App;

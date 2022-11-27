import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { ModalWindowType } from './../model';
import ModalWindowOpener from './ModalWindowOpener';
import { Genre } from '../model';

const INITIAL_MOVIE_LIST = [
  {
    value: 'DOCUMENTARY 1',
    genre: Genre.Documentary,
  },
  {
    value: 'COMEDY 1',
    genre: Genre.Comedy,
  },
  {
    value: 'DOCUMENTARY 2',
    genre: Genre.Documentary,
  },
  {
    value: 'DOCUMENTARY 3',
    genre: Genre.Documentary,
  },
  {
    value: 'COMEDY 4',
    genre: Genre.Comedy,
  },
  {
    value: 'CRIME 2',
    genre: Genre.Crime,
  },
];

export interface Handlers {
  addMovie: Function;
  deleteMovie: Function;
  updateMovie: Function;
}

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    setMovies(INITIAL_MOVIE_LIST);
  }, []);

  let MOVIE_HANDLERS = {
    delete: () => {
      console.log('delete', selectedMovie);
      setMovies(movies.filter((movie) => movie.value !== selectedMovie));    
    },
    add: () => {
      console.log('add');
    },
    edit: () => {
      console.log('update', selectedMovie);
    },
  };

  return (
    <>
      {modalWindowType !== ModalWindowType.None && (
        <ModalWindowOpener
          movieHandlers={MOVIE_HANDLERS}
          type={modalWindowType}
          onCloseWindow={() => setModalWindowType(ModalWindowType.None)}
        />
      )}
      <Header
        searchText={searchText}
        onChangedSearchText={setSearchText}
        openAddMovieWindow={() => setModalWindowType(ModalWindowType.AddMovie)}
      />
      <ErrorBoundary>
        <MainContent
          movies={movies}
          searchText={searchText}
          openModalWindow={(type: ModalWindowType) => setModalWindowType(type)}
          selectMovie={setSelectedMovie}
        />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;

import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { useParams, useSearchParams } from 'react-router-dom';
import { ModalWindowType, SearchBy } from './../model';
import ModalWindowOpener from './ModalWindowOpener';
import MovieDetails from './MovieDetils';
import { useGetMoviesQuery } from '../query/movies';
import { useAppSelector } from '../store/hooks';
import { selectSelectedMovie } from '../store/moviesSlice';
import { SortOrder } from '../model/movies-query-params';

const App = () => {
  const selectedMovie = useAppSelector(selectSelectedMovie);
  const { searchText } = useParams();

  const [sortBy, setSortBy] = useState('');
  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);
  const [isViewMode, setIsViewMode] = useState(false);
  const [, setSelectedGenre] = useState();
  const [searchParams, setSearchParams] = useSearchParams('');
  const selectedGenre = searchParams.get('filter');

  const queryParams = {
    search: searchText,
    searchBy: SearchBy.Title,
    sortOrder: SortOrder.Increase,
    sortBy: sortBy,
    filter: selectedGenre,
  } as const;
  const { data, error, isLoading, refetch } = useGetMoviesQuery(queryParams);

  const onCloseModalWindowHandler = (isDataUpdated: boolean) => {
    if (isDataUpdated) {
      refetch();
    }
    setModalWindowType(ModalWindowType.None);
  };

  return (
    <>
      {modalWindowType !== ModalWindowType.None && (
        <ModalWindowOpener
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
          // onChangedSearchText={(e: any) => {
          //   console.log(e);
          //   setSearchParams({ filter: e.target.value });
          // }}
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
            movies={(data as any)?.data}
            selectedGenre={selectedGenre}
            onChangeSort={setSortBy}
            onChangeSelectedGenre={(e: any) => {
              console.log(e);
              setSearchParams({ filter: e });
            }}
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

import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);
  const [isViewMode, setIsViewMode] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams('');
  const selectedGenre = searchParams.get('filter');
  const sortBy = searchParams.get('sortBy');
  const movieId = searchParams.get('movie');

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
      {movieId ? (
        <MovieDetails
          movie={selectedMovie}
          onSearchClick={() => setIsViewMode(false)}
        />
      ) : (
        <Header
          searchText={searchText}
          onChangedSearchText={(e: any) => {
            console.log(e);
            navigate({
              pathname: `/search/${e}`,
              search: `?sortBy=${sortBy}&filter=${selectedGenre}`,
            });
          }}
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
            onChangeSort={(sortBy: any) =>
              setSearchParams({ sortBy: sortBy, filter: selectedGenre })
            }
            onChangeSelectedGenre={(e: any) => {
              console.log(e);
              setSearchParams({ filter: e, sortBy: sortBy });
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

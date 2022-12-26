import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ModalWindowType, MovieData, SearchBy } from './../model';
import ModalWindowOpener from './ModalWindowOpener';
import MovieDetails from './MovieDetils';
import { useGetMoviesQuery, useGetMovieInfoQuery } from '../query/movies';
import { useAppSelector } from '../store/hooks';
import { selectSelectedMovie } from '../store/moviesSlice';
import { Genre, SortOrder } from './../model';

const App = () => {
  const selectedMovie = useAppSelector(selectSelectedMovie);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [modalWindowType, setModalWindowType] = useState(ModalWindowType.None);

  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('search');
  const selectedGenre = searchParams.get('filter') as Genre;
  const sortBy = searchParams.get('sortBy');

  const queryParams = {
    search: search,
    sortBy: sortBy,
    filter: selectedGenre,
  } as const;

  const getQueryObject = () => {
    let result = {} as any;
    for (let key in queryParams) {
      if ((queryParams as any)[key]) {
        result[key] = (queryParams as any)[key];
      }
    }
    if (result.search) {
      result.searchBy = SearchBy.Title;
    }
    if (result.sortBy) {
      result.sortOrder = SortOrder.Increase;
    }
    return result;
  };

  const { data, error, isLoading, refetch } = useGetMoviesQuery(
    getQueryObject(),
  );

  const movieInfo = useGetMovieInfoQuery(movieId).data as MovieData;

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
          movie={selectedMovie}
          type={modalWindowType}
          onCloseWindow={onCloseModalWindowHandler}
        />
      )}
      {movieId ? (
        <MovieDetails
          movie={movieInfo}
          onSearchClick={() =>
            navigate({
              pathname: '/search',
            })
          }
        />
      ) : (
        <Header
          searchText={search}
          onChangedSearchText={(e: string) => {
            setSearchParams({ ...getQueryObject(), search: e });
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
            selectedSortBy={sortBy}
            selectedGenre={selectedGenre}
            onChangeSort={(sort: string) =>
              setSearchParams({ ...getQueryObject(), sortBy: sort })
            }
            onChangeSelectedGenre={(genre: Genre) => {
              setSearchParams({ ...getQueryObject(), filter: genre });
            }}
            openModalWindow={(type: ModalWindowType) =>
              setModalWindowType(type)
            }
            showMovieDetails={(id) => {
              navigate({
                pathname: `/search/${id}`,
              });
            }}
          />
        ) : null}
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;

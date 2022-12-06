import styled from 'styled-components';
import React from 'react';
import MovieCard from './MovieCard';
import { MovieData, Genre } from '../model';
import { MainContentProps } from './MainContent';

const Container = styled.div`
  background: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MoviesGrid = (props: MainContentProps) => {
  const isMovieVisible = (movie: MovieData) => {
    const isMatchesSelectedGenre =
      props.genre === Genre.All || props.genre === movie.genre;
    const isMatchesSearch = movie.title.includes(
      props.searchText.toUpperCase(),
    );
    return isMatchesSelectedGenre && isMatchesSearch;
  };

  return (
    <Container>
      {props.movies.filter(isMovieVisible).map((movie: MovieData) => {
        return (
          <MovieCard
            key={movie.title}
            movie={movie}
            openModalWindow={props.openModalWindow}
            selectMovie={props.selectMovie}
          ></MovieCard>
        );
      })}
    </Container>
  );
};

export default MoviesGrid;

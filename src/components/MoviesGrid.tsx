import styled from 'styled-components';
import React from 'react';
import MovieCard from './MovieCard';
import { MovieData } from '../model';
import { MainContentProps } from './MainContent';

const Container = styled.div`
  background: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MoviesGrid = (props: MainContentProps) => {
  return (
    <Container onClick={() => props.switchViewMode(true)}>
      {props.movies.map((movie: MovieData) => {
        return (
          <MovieCard
            key={movie.title}
            movie={movie}
            switchViewMode={props.switchViewMode}
            openModalWindow={props.openModalWindow}
          ></MovieCard>
        );
      })}
    </Container>
  );
};

export default MoviesGrid;

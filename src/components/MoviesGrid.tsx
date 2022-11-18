import styled from 'styled-components';
import React from 'react';
import MovieCard from './MovieCard';
import { Filter, MovieData, Genre } from '../model';

export const movies = [{
  value: 'DOCUMENTARY 1',
  genre: Genre.Documentary,
}, {
  value: 'COMEDY 1',
  genre: Genre.Comedy,
}, {
  value: 'DOCUMENTARY 2',
  genre: Genre.Documentary,
}, {
  value: 'DOCUMENTARY 3',
  genre: Genre.Documentary,
}, {
  value: 'COMEDY 4',
  genre: Genre.Comedy,
}, {
  value: 'CRIME 2',
  genre: Genre.Crime,
}] as const;


const Container = styled.div`
  background: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MoviesGrid = (props: Filter) => {
  const isMovieVisible = (movie: MovieData) => {
    const isMatchesSelectedGenre = props.genre === Genre.All || props.genre === movie.genre;
    const isMatchesSearch = movie.value.includes(props.searchText.toUpperCase());
    return isMatchesSelectedGenre && isMatchesSearch;
  };

  return <Container>
    {movies
      .filter((movie: MovieData) => isMovieVisible(movie))
      .map((movie: MovieData)=> {    
        return <MovieCard 
          key= { movie.value }
          value={ movie.value }
          genre={ movie.genre }
        ></MovieCard>;
      })}
  </Container>;
};

export default MoviesGrid;
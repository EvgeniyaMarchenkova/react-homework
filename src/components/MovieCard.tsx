import styled from 'styled-components';
import React from 'react';
import { MovieData } from '../model/movie-data';

const MovieWrapper = styled.section`
  background: gray;
  flex: 1 1 25%;
  min-width: 261px;
  padding: 0 10px 20px 10px;
  border: 1px solid darkgrey;
`;

const MovieCard = (props: MovieData) => {
  return <MovieWrapper>{props.value}</MovieWrapper>;
};

export default MovieCard;
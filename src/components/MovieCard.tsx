import styled from 'styled-components';
import React from 'react';
import { ModalWindowType, MovieData } from '../model';
import HamburgerMenu from './HamburgerMenu';

export interface MovieCardProps {
  openModalWindow: (type: ModalWindowType) => void;
  selectMovie: (movie: MovieData) => void;
  movie: MovieData;
}

const MovieWrapper = styled.section`
  background: gray;
  flex: 1 1 25%;
  min-width: 261px;
  padding: 10px;
  border: 1px solid darkgrey;
  position: relative;
`;

const MovieCard = (props: MovieCardProps) => {
  return (
    <MovieWrapper onClick={() => props.selectMovie(props.movie)}>
      {props.movie.title}{' '}
      <HamburgerMenu openModalWindow={props.openModalWindow} />
    </MovieWrapper>
  );
};

export default MovieCard;

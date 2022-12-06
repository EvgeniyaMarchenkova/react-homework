import styled from 'styled-components';
import React from 'react';
import { ModalWindowType, MovieData } from '../model';
import HamburgerMenu from './HamburgerMenu';

export interface MovieCardProps {
  openModalWindow: (type: ModalWindowType) => void;
  selectMovie: (movie: MovieData) => void;
  switchViewMode: (isViewMode: boolean) => void;
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
    <MovieWrapper
      onClick={() => {
        props.selectMovie(props.movie);
        props.switchViewMode(true);
      }}
    >
      {props.movie.title}{' '}
      <HamburgerMenu
        openModalWindow={props.openModalWindow}
        selectMovie={() => {
          props.switchViewMode(false);
          props.selectMovie(props.movie);
        }}
      />
    </MovieWrapper>
  );
};

export default MovieCard;

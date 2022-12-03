import styled from 'styled-components';
import React from 'react';
import { ModalWindowType, MovieData } from '../model';
import HamburgerMenu from './HamburgerMenu';

export interface MovieCardProps extends MovieData {
  openModalWindow: (type: ModalWindowType) => void;
  selectMovie: (name: string) => void;
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
    <MovieWrapper onClick={() => props.selectMovie(props.value)}>
      {props.value} <HamburgerMenu openModalWindow={props.openModalWindow} />
    </MovieWrapper>
  );
};

export default MovieCard;

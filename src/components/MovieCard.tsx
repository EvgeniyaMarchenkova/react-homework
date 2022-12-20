import styled from 'styled-components';
import React from 'react';
import { ModalWindowType, MovieData } from '../model';
import HamburgerMenu from './HamburgerMenu';
import { useAppDispatch } from '../store/hooks';
import { setSelectedMovie } from '../store/moviesSlice';

export interface MovieCardProps {
  openModalWindow: (type: ModalWindowType) => void;
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
  const dispatch = useAppDispatch();
  const selectMovie = () => dispatch(setSelectedMovie(props.movie));
  return (
    <MovieWrapper
      onClick={() => {
        selectMovie();
        props.switchViewMode(true);
      }}
    >
      {props.movie.title}{' '}
      <HamburgerMenu
        openModalWindow={props.openModalWindow}
        selectMovie={() => {
          props.switchViewMode(false);
          selectMovie();
        }}
      />
    </MovieWrapper>
  );
};

export default MovieCard;

import React from 'react';
import NavBar from './NavBar';
import MoviesGrid from './MoviesGrid';
import { Genre, ModalWindowType, MovieData } from './../model';

export interface MainContentProps {
  openModalWindow: (type: ModalWindowType) => void;
  movies: MovieData[];
  selectedGenre?: string;
  switchViewMode: (isViewMode: boolean) => void;
  onChangeSort?: React.Dispatch<React.SetStateAction<string>>;
  onChangeSelectedGenre?: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent = (props: MainContentProps) => {
  return (
    <div>
      <NavBar
        selectedGenre={props.selectedGenre}
        onChangeSort={props.onChangeSort}
        onChangeSelectedGenre={props.onChangeSelectedGenre}
      />
      <MoviesGrid
        movies={props.movies || []}
        openModalWindow={props.openModalWindow}
        switchViewMode={props.switchViewMode}
      />
    </div>
  );
};

export default MainContent;

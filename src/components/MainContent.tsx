import React from 'react';
import NavBar from './NavBar';
import MoviesGrid from './MoviesGrid';
import { Genre, ModalWindowType, MovieData, SortOrder } from './../model';

export interface MainContentProps {
  openModalWindow: (type: ModalWindowType) => void;
  movies: MovieData[];
  selectedSortBy?: SortOrder;
  selectedGenre?: Genre;
  showMovieDetails: (id: number) => void;
  onChangeSort?: React.Dispatch<React.SetStateAction<string>>;
  onChangeSelectedGenre?: React.Dispatch<React.SetStateAction<Genre>>;
}

const MainContent = (props: MainContentProps) => {
  return (
    <div>
      <NavBar
        selectedSortBy={props.selectedSortBy}
        selectedGenre={props.selectedGenre}
        onChangeSort={props.onChangeSort}
        onChangeSelectedGenre={props.onChangeSelectedGenre}
      />
      <MoviesGrid
        movies={props.movies || []}
        openModalWindow={props.openModalWindow}
        showMovieDetails={props.showMovieDetails}
      />
    </div>
  );
};

export default MainContent;

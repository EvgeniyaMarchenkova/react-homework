import React, { useState, SetStateAction, Dispatch } from 'react';
import NavBar from './NavBar';
import MoviesGrid from './MoviesGrid';
import { Filter, Genre, ModalWindowType, MovieData } from './../model';

export interface MainContentProps extends Filter {
  openModalWindow: (type: ModalWindowType) => void;
  selectMovie: Dispatch<SetStateAction<MovieData>>;
  movies: MovieData[];
  switchViewMode: (isViewMode: boolean) => void;
}

const MainContent = (props: MainContentProps) => {
  const [selectedGenre, setSelectedGenre] = useState(Genre.All);

  return (
    <div>
      <NavBar
        selectedGenre={selectedGenre}
        onChangeSelectedGenre={setSelectedGenre}
      />
      <MoviesGrid
        movies={props.movies}
        genre={selectedGenre}
        searchText={props.searchText}
        openModalWindow={props.openModalWindow}
        selectMovie={props.selectMovie}
        switchViewMode={props.switchViewMode}
      />
    </div>
  );
};

export default MainContent;

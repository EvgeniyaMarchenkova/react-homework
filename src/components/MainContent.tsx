import React, { useState } from 'react';
import NavBar from './NavBar';
import MoviesGrid from './MoviesGrid';
import { Filter, Genre } from './../model';

export interface MainContentProps extends Filter {
  openModalWindow: Function;
  selectMovie: any;
  movies: any;
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
      />
    </div>
  );
};

export default MainContent;

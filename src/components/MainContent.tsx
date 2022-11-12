import React,  { useState } from 'react';
import NavBar from './NavBar';
import MoviesGrid from './MoviesGrid';
import { Filter, Genre } from './../model';

let MainContent = (props: Filter) => {
  const [ selectedGenre, setSelectedGenre ] = useState(Genre.All);

  return <div>
    <NavBar genre={selectedGenre} onChangeSelectedGenre={setSelectedGenre}/>
    <MoviesGrid genre={selectedGenre} searchText={props.searchText}/>
  </div>;
};

export default MainContent;
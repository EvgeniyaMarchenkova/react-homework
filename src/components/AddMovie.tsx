import React from 'react';
import styled from 'styled-components';

interface AddUpdateMovieProps {
  onAddMovie?: any;
  onUpdateMovie?: any;
}

const AddUpdateMovieWrapper = styled.div``;

const AddUpdateMovie = (props: AddUpdateMovieProps) => {
  const onUpdateClick = () => {
    props.onUpdateMovie(true);
  };

  const onAddMovie = () => {
    props.onAddMovie(true);
  };

  return (
    <AddUpdateMovieWrapper>
      <h3>{props.onUpdateMovie ? 'UPDATE MOVIE' : 'ADD MOVIE'}</h3>
      {props.onUpdateMovie ? (
        <button onClick={onUpdateClick}>UPDATE</button>
      ) : (
        <button onClick={onAddMovie}>ADD</button>
      )}
    </AddUpdateMovieWrapper>
  );
};

export default AddUpdateMovie;

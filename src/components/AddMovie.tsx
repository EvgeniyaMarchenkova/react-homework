import React from 'react';
import styled from 'styled-components';

interface AddUpdateMovieProps {
  onAddMovie?: any;
  onUpdateMovie?: any;
}

const AddUpdateMovieWrapper = styled.div``;

const AddUpdateMovie = (props: AddUpdateMovieProps) => {
  return (
    <AddUpdateMovieWrapper>
      <h3>{props.onUpdateMovie ? 'UPDATE MOVIE' : 'ADD MOVIE'}</h3>      
      {(props.onUpdateMovie && (
        <button onClick={props.onUpdateMovie}>UPDATE</button>
      )) || <button onClick={props.onAddMovie}>ADD</button>}
    </AddUpdateMovieWrapper>
  );
};

export default AddUpdateMovie;

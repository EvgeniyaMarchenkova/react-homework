import React from 'react';
import styled from 'styled-components';

const DeleteMovieWrapper = styled.div``;

const DeleteMovie = (props: any) => {
  return (
    <DeleteMovieWrapper>
      <h3>DELETE MOVIE</h3>
      <div>Are you sure you want to delete the movie?</div>
      <button onClick={props.onDeleteMovie}>CONFIRM</button>
    </DeleteMovieWrapper>
  );
};

export default DeleteMovie;

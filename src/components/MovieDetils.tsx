import styled from 'styled-components';
import React, { useContext } from 'react';
import { MovieContext } from './App';
import { MovieData } from '../model';
import { BsSearch } from 'react-icons/bs';

interface MovieDetailsProps {
  onSearchClick: () => void;
}

const MovieDetailsWrapper = styled.div`
  height: 150px;
  padding: 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescriptionWrapper = styled.div`
  padding-right: 15px;
`;

const MovieDetails = (props: MovieDetailsProps) => {
  const movie: MovieData = useContext(MovieContext);
  return (
    <MovieDetailsWrapper>
      <FlexWrapper>
        {movie.title}
        <BsSearch onClick={props.onSearchClick} />
      </FlexWrapper>
      <DescriptionWrapper>{movie.description}</DescriptionWrapper>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;

import styled from 'styled-components';
import React from 'react';
import { MovieData } from '../model';
import { BsSearch } from 'react-icons/bs';

interface MovieDetailsProps {
  movie: MovieData;
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
  return (
    <MovieDetailsWrapper>
      <FlexWrapper>
        {props.movie.title}
        <BsSearch onClick={props.onSearchClick} />
      </FlexWrapper>
      <DescriptionWrapper>{props.movie.overview}</DescriptionWrapper>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;

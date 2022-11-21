import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface HeaderData {
  searchText: string;
  onChangedSearchText: React.Dispatch<React.SetStateAction<string>>;
  openAddMovieWindow: Function;
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;

const AddMovieButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const HeaderContainer = styled.div`
  height: 150px;
  line-height: 150px;
  background: -webkit-linear-gradient(
      45deg,
      #292929 25%,
      transparent 25%,
      transparent 75%,
      #292929 75%
    ),
    -webkit-linear-gradient(
        45deg,
        #292929 25%,
        transparent 25%,
        transparent 75%,
        #292929 75%
      ) 0.1875em 0.1875em,
    -webkit-radial-gradient(at 50% 0, #484847, #090909);
  background: linear-gradient(
      45deg,
      #292929 25%,
      transparent 25%,
      transparent 75%,
      #292929 75%
    ),
    linear-gradient(
        45deg,
        #292929 25%,
        transparent 25%,
        transparent 75%,
        #292929 75%
      )
      0.1875em 0.1875em,
    radial-gradient(at 50% 0, #484847, #090909);
  background-size: 0.375em 0.375em, 0.375em 0.375em, 100% 100%;
`;

const Header = (props: HeaderData) => {
  return (
    <HeaderContainer>
      <AddMovieButton onClick={() => props.openAddMovieWindow()}>
        + ADD MOVIE
      </AddMovieButton>
      <Input
        value={props.searchText}
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          props.onChangedSearchText(ev.target.value)
        }
        type="text"
        placeholder="Select"
      />
      <button onClick={() => props.onChangedSearchText('')}>
        Reset Search
      </button>
    </HeaderContainer>
  );
};

export default Header;

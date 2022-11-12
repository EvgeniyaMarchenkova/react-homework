import React from 'react';
import styled from 'styled-components';
import { Genre } from './../model';

interface MenuItemProps {
  selected: boolean;
}

const Wrapper = styled.section`
  display: flex;
`;

const MenuItem = styled.span<MenuItemProps>`
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GENRES = [ Genre.All, Genre.Documentary, Genre.Comedy, Genre.Crime, Genre.Horror ];

let NavBar = (props: any) => {
  return <Wrapper>
    {...GENRES.map((genre) =>
      <MenuItem
        key={ genre }
        selected={ genre === props.selectedGenre }
        onClick={ () => props.onChangeSelectedGenre(genre) }>
          { genre }
      </MenuItem>,
    )}
  </Wrapper>;
};

export default NavBar;
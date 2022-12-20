import React from 'react';
import styled from 'styled-components';
import { Genre } from './../model';
import Sorting from './Sorting';

interface MenuItemProps {
  selected: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.span<MenuItemProps>`
  position: sticky;
  top: 0;
  padding: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
`;

interface NavBarProps {
  selectedGenre: string;
  onChangeSelectedGenre: React.Dispatch<React.SetStateAction<Genre>>;
}

const GENRES = [
  Genre.All,
  Genre.Documentary,
  Genre.Comedy,
  Genre.Crime,
  Genre.Horror,
] as const;

const NavBar = (props: NavBarProps) => {
  return (
    <Wrapper>
      <Wrapper>
        {GENRES.map((genre) => (
          <MenuItem
            key={genre}
            selected={genre === props.selectedGenre}
            onClick={() => props.onChangeSelectedGenre(genre)}
          >
            {genre}
          </MenuItem>
        ))}
      </Wrapper>
      <Sorting />
    </Wrapper>
  );
};

export default NavBar;

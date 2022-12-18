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
  onChangeSort: React.Dispatch<React.SetStateAction<string>>;
  onChangeSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
}

export const GENRES = [
  Genre.Documentary,
  Genre.Comedy,
  Genre.Crime,
  Genre.Horror,
  Genre.Adventure,
  Genre.Animation,
  Genre.Drama,
  Genre.Family,
  Genre.Romance,
] as const;

const NavBar = (props: NavBarProps) => {
  return (
    <Wrapper>
      <Wrapper>
        <MenuItem
          selected={null === props.selectedGenre}
          onClick={() => props.onChangeSelectedGenre('')}
        >
          ALL
        </MenuItem>
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
      <Sorting onChangeSort={props.onChangeSort} />
    </Wrapper>
  );
};

export default NavBar;

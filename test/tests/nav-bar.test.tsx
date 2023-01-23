import React from 'react';
import { Genre } from '../../src/model';
import NavBar, { GENRES } from '../../src/components/NavBar';
import { render, fireEvent, screen } from '@testing-library/react';

const mockOnChangeSelectedGenre = jest.fn();
const mockOnChangeSort = jest.fn();

describe('NavBar component', () => {
  it('renders a MenuItem for each genre in the GENRES array', () => {
    const { getAllByTestId } = render(
      <NavBar
        selectedGenre={Genre.Comedy}
        selectedSortBy='popularity.desc'
        onChangeSelectedGenre={mockOnChangeSelectedGenre}
        onChangeSort={mockOnChangeSort}
      />
    );
    expect(screen.getAllByTestId('genre-item').length).toEqual(GENRES.length);
  });

  it('calls the onChangeSelectedGenre function when a menu item is clicked', () => {
    const { getByText } = render(
      <NavBar
        selectedGenre={Genre.Comedy}
        selectedSortBy='popularity.desc'
        onChangeSelectedGenre={mockOnChangeSelectedGenre}
        onChangeSort={mockOnChangeSort}
      />
    );
    fireEvent.click(screen.getByText(Genre.Documentary));
    expect(mockOnChangeSelectedGenre).toHaveBeenCalledWith(Genre.Documentary);
  });

  it('renders the Sorting component', () => {
    const { getByText } = render(
      <NavBar
        selectedGenre={Genre.Comedy}
        selectedSortBy='popularity.desc'
        onChangeSelectedGenre={mockOnChangeSelectedGenre}
        onChangeSort={mockOnChangeSort}
      />
    );
    expect(getByText('Sort by:')).toBeInTheDocument();
  });

  it('calls the onChangeSort function when the Sorting component changes', () => {
    const { getByText } = render(
      <NavBar
        selectedGenre={Genre.Comedy}
        selectedSortBy='popularity.desc'
        onChangeSelectedGenre={mockOnChangeSelectedGenre}
        onChangeSort={mockOnChangeSort}
      />
    );
    fireEvent.click(getByText('rating'));
    expect(mockOnChangeSort).toHaveBeenCalledWith('vote_average');
  });
});

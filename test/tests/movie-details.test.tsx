import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetails from '../../src/components/MovieDetils';
import { Genre } from '../../src/model';

const mockMovie = {
  title: 'The Shawshank Redemption',
  overview:
    'Two imprisonedace and eventual redemption through acts of common decency.',
  genres: [Genre.Comedy],
  id: 121212,
  poster_path: 'test url',
  runtime: 121212,
};

const mockOnSearchClick = jest.fn();

describe('MovieDetails component', () => {
  test('renders movie title and overview', () => {
    render(
      <MovieDetails movie={mockMovie} onSearchClick={mockOnSearchClick} />
    );

    const titleElement = screen.getByText(mockMovie.title);
    const overviewElement = screen.getByText(mockMovie.overview);

    expect(titleElement).toBeInTheDocument();
    expect(overviewElement).toBeInTheDocument();
  });

  test('calls onSearchClick prop when search icon is clicked', () => {
    const { getByTestId } = render(
      <MovieDetails movie={mockMovie} onSearchClick={mockOnSearchClick} />
    );

    fireEvent.click(getByTestId('search-icon'));

    expect(mockOnSearchClick).toHaveBeenCalledTimes(1);
  });
});

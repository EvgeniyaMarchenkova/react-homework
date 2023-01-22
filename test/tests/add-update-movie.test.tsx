import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddUpdateMovie from '../../src/components/AddMovie';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

const mockSelectedMovie = {
  title: 'Test',
  release_date: '2022-12-12',
  vote_average: '5',
  genres: ['Comedy', 'Adventure'],
  overview: 'Test overview',
  poster_path: 'test-path',
  runtime: '120',
};

jest.mock('../../src/store/hooks', () => ({
  useAppSelector: () => mockSelectedMovie,
}));

describe('Search should', () => {
  it('should display the correct title when updating a movie', () => {
    const fakeOnUpdateMovie = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <AddUpdateMovie onUpdateMovie={fakeOnUpdateMovie} />
      </Provider>
    );
    expect(getByText('UPDATE MOVIE')).toBeInTheDocument();
  });

  it('should populate the form with the selected movie data when updating a movie', () => {
    const fakeOnUpdateMovie = jest.fn();

    const { getByLabelText } = render(
      <Provider store={store}>
        <AddUpdateMovie onUpdateMovie={fakeOnUpdateMovie} />
      </Provider>
    );
    expect(getByLabelText('Title')).toHaveValue(mockSelectedMovie.title);
    expect(getByLabelText('Release Date')).toHaveValue(
      mockSelectedMovie.release_date
    );
    expect(getByLabelText('Rating')).toHaveValue(
      mockSelectedMovie.vote_average
    );
    expect(getByLabelText('Movie URL')).toHaveValue(
      mockSelectedMovie.poster_path
    );
    expect(getByLabelText('Overview')).toHaveValue(mockSelectedMovie.overview);
    expect(getByLabelText('Runtime')).toHaveValue(mockSelectedMovie.runtime);
  });

  it('should call the onUpdateMovie handler when the form is submitted', async () => {
    const fakeOnUpdateMovie = jest.fn();
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <AddUpdateMovie onUpdateMovie={fakeOnUpdateMovie} />
      </Provider>
    );

    fireEvent.change(getByLabelText('Title'), {
      target: { value: 'New test Movie' },
    });
    fireEvent.change(getByLabelText('Release Date'), {
      target: { value: '2000-12-12' },
    });
    const submitBtn = getByText('UPDATE');
    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(fakeOnUpdateMovie).toHaveBeenCalledWith(true, {
        title: 'New test Movie',
        release_date: '2000-12-12',
        vote_average: '5',
        genres: ['Comedy', 'Adventure'],
        overview: 'Test overview',
        poster_path: 'test-path',
        runtime: '120',
      })
    );
  });
});

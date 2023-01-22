import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../src/components/Header';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

describe('Search should', () => {
  it('render correctly', () => {
    const fakeHandler = jest.fn();
    const header = renderer
      .create(
        <Provider store={store}>
          <Header
            onChangedSearchText={fakeHandler}
            openAddMovieWindow={fakeHandler}
          >
            Facebook
          </Header>
        </Provider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('input should correctly handle users input ', async () => {
    const fakeHandlerChangeInput = jest.fn();
    const fakeHandlerAddMovieClick = jest.fn();
    const { getByRole } = render(
      <Provider store={store}>
        <Header
          onChangedSearchText={fakeHandlerChangeInput}
          openAddMovieWindow={fakeHandlerAddMovieClick}
        >
          Facebook
        </Header>
      </Provider>
    );
    const input = await getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, { target: { value: 'test' } });
    expect(fakeHandlerChangeInput).toHaveBeenCalledWith('test');
  });
});

it('openAddMovieWindow is called when the add movie button is clicked', async () => {
  const fakeHandlerChangeInput = jest.fn();
  const fakeHandlerAddMovieClick = jest.fn();
  const { getByText } = render(
    <Provider store={store}>
      <Header
        onChangedSearchText={fakeHandlerChangeInput}
        openAddMovieWindow={fakeHandlerAddMovieClick}
      >
        Facebook
      </Header>
    </Provider>
  );

  const addMovieButton = getByText('+ ADD MOVIE');
  fireEvent.click(addMovieButton);

  expect(fakeHandlerAddMovieClick).toHaveBeenCalledTimes(1);
});

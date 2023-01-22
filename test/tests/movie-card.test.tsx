import { render, fireEvent } from "@testing-library/react";
import MovieCard from "../../src/components/MovieCard";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import React from "react";

jest.mock("../../src/store/hooks", () => ({
  useAppDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe("MovieCard", () => {
  let movie = {
    id: 1,
    title: "Test Movie",
    genres: ["Comedy"],
    overview: "test",
    poster_path: "",
    release_date: "2002-10-10",
    runtime: 120,
  } as any;
  let switchViewMode = jest.fn();
  let openModalWindow = jest.fn();
  let dispatch = jest.fn();

  it("should render the movie title", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MovieCard
          movie={movie}
          switchViewMode={switchViewMode}
          openModalWindow={openModalWindow}
        />
      </Provider>
    );
    expect(getByText(movie.title)).toBeInTheDocument();
  });

  it("should switch view mode when clicked on the movie", () => {
    const { getByTestId } = render(
      <MovieCard
        movie={movie}
        switchViewMode={switchViewMode}
        openModalWindow={openModalWindow}
      />
    );
    fireEvent.click(getByTestId("movie-wrapper"));
    expect(switchViewMode).toHaveBeenCalledTimes(1);
  });

  it("should call switchViewMode with movie id when clicked on the movie", () => {
    const { getByText } = render(
      <MovieCard
        movie={movie}
        switchViewMode={switchViewMode}
        openModalWindow={openModalWindow}
      />
    );
    fireEvent.click(getByText(movie.title));
    expect(switchViewMode).toHaveBeenCalledWith(movie.id);
  });

  it("should call openModalWindow when hamburger menu is clicked", () => {
    const { getByTestId, getByText } = render(
      <MovieCard
        movie={movie}
        switchViewMode={switchViewMode}
        openModalWindow={openModalWindow}
      />
    );
    fireEvent.click(getByTestId("hamburger-menu"));
    fireEvent.click(getByText("Delete"));
    expect(openModalWindow).toHaveBeenCalled();
  });
});

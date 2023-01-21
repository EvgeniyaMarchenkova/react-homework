import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../../src/components/Header";
import App from "../../../src/components/App";
import { Provider } from "react-redux";
import { store } from "../../../src/store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Search should", () => {
  it("render correctly", () => {
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

  it("contain input for search", async () => {
    const fakeHandlerChangeInput = jest.fn();
    const fakeHandlerAddMovieClick = jest.fn();
    render(
      <Provider store={store}>
        <Header
          onChangedSearchText={fakeHandlerChangeInput}
          openAddMovieWindow={fakeHandlerAddMovieClick}
        >
          Facebook
        </Header>
      </Provider>
    );
    const input = await screen.getByRole("textbox");
    const input2 = await screen.getByPlaceholderText("Select");
    expect(input).toBeInTheDocument();
    // await fireEvent.change(input2, { target: { value: "dragon" } });
    // expect((input2 as HTMLInputElement).value).toEqual("dragon");

    // await userEvent.type(input, "dragon");
    // screen.debug();
    // expect(screen.getByRole("textbox") as HTMLInputElement).toHaveValue(
    //   "dragon"
    // );
  });
});

it("should invoke corresponding handler when user input value changes", async () => {
  const fakeHandlerChangeInput = jest.fn();
  const fakeHandlerAddMovieClick = jest.fn();
  render(
    <Provider store={store}>
      (
      <Header
        onChangedSearchText={fakeHandlerChangeInput}
        openAddMovieWindow={fakeHandlerAddMovieClick}
      >
        ) as any Facebook
      </Header>
    </Provider>
  );
  const input = await screen.getByRole("textbox");
  await fireEvent.change(input, { target: { value: "dragon" } });
  expect(fakeHandlerChangeInput).toHaveBeenCalledTimes(1);

  // await userEvent.type(input, "dragon");
  // screen.debug();
  // expect(screen.getByRole("textbox") as HTMLInputElement).toHaveValue(
  //   "dragon"
  // );
});

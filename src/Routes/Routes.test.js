import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router";
import GameContextProvider from "../Context/GameContextProvider";
import MoveContextProvider from "../Context/MoveContextProvider";
import AudioContextProvider from "../Context/AudioContextProvider";
import Game from "../Game/Game";

// ! NEW TESTS

test("redirects to home game component if typo url", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/randomtypo"]}>
      <GameContextProvider>
        <AudioContextProvider>
          <MoveContextProvider>
            <Routes />
          </MoveContextProvider>
        </AudioContextProvider>
      </GameContextProvider>
    </MemoryRouter>
  );
  expect(getByText("Yes! Let's go!")).toBeInTheDocument();
});

// start on homepage ("/"), clicks on start button, redirects to game setup page
test("redirects from home page ('/') to game page ('/game')", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <GameContextProvider>
        <AudioContextProvider>
          <MoveContextProvider>
            <Routes />
          </MoveContextProvider>
        </AudioContextProvider>
      </GameContextProvider>
    </MemoryRouter>
  );
  const btn = getByText("Yes! Let's go!");
  fireEvent.click(btn);
  expect(getByText("Game Setup")).toBeInTheDocument();
});

test("starts in game component", () => {
  const { getByText } = render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <Routes />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
  expect(getByText("Game Setup")).toBeInTheDocument();
});
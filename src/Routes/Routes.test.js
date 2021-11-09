import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router";
import GameContextProvider from "../Context/GameContextProvider";
import MoveContextProvider from "../Context/MoveContextProvider";
import AudioContextProvider from "../Context/AudioContextProvider";

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
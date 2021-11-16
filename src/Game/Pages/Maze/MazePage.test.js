import React from "react";
import { render } from "@testing-library/react";
import MazePage from "./MazePage";
import GameContextProvider from "../../../Context/GameContextProvider";
import AudioContextProvider from "../../../Context/AudioContextProvider";
import MoveContextProvider from "../../../Context/MoveContextProvider";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <MazePage />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <AudioContextProvider>
        <MoveContextProvider>
          <MazePage />
        </MoveContextProvider>
      </AudioContextProvider>
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
import React from 'react';
import { render } from "@testing-library/react";
import WinPage from "./WinPage";
import GameContextProvider from '../../Context/GameContextProvider';

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <WinPage />
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <WinPage />
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
})
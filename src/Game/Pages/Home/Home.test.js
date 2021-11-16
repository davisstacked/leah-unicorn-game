import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
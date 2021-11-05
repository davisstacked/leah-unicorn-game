import { addProps, getSpritePositions } from "./MazeHelpers";

describe("mazeHelper functions work", () => {
  test("addProps works", () => {
    const apiResponse = [
      ["west", "north"],
      ["west", "north"],
      ["north"],
      ["west"],
      ["west"],
      ["west"],
      ["west"],
      ["north"],
      [],
    ];
    const expectedResult = [
      ["west", "north", 0],
      ["west", "north", 1],
      ["north", "east", 2],
      ["west", 3],
      ["west", 4],
      ["west", "east", 5],
      ["west", "south", 6],
      ["north", "south", 7],
      ["east", "south", 8],
    ];
    expect(addProps(apiResponse, 3)).toEqual(expectedResult);
    expect(addProps(apiResponse, 3)).toHaveLength(9);
  });
})
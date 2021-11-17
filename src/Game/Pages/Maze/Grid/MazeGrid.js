import React, { useContext, useEffect, useState } from "react";
import UnicornApi from "../../../../API/UnicornApi";
import GameContext from "../../../../Context/GameContext";
import MoveContext from "../../../../Context/MoveContext";
import { addGridCellBorders } from "../Helpers/MazeHelpers";
import { v4 as uuid } from "uuid";
import GridCell from "./GridCell";
import "./GridCell.css"
import MoveButtons from "./Buttons/MoveButtons";
import HotKeys from "./Hotkeys/HotKeyHandlers";
import RotatingHorse from "./Spinner";

const MazeGrid = () => {
  const { gameData } = useContext(GameContext);
  const [mazeGrid, setMazeGrid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    mazeId,
    setMazeId,
    handleMove,
    spritePositions,
    setSpritePositions,
    getSpritePositions
  } = useContext(MoveContext);

  // determines size of maze based on user input saved in gameContext. Builds maze
  const gridStyle = {
    gridTemplateColumns: `repeat(${gameData.size}, minmax(0, 1fr))`
  };

  // GETS A NEW MAZE ID AND SETS IT TO STATE BASED ON USER CHOICES FROM SETUP MENU------------------------
  // starts new game
  useEffect(() => {
    // retrieves maze id from API and sets state with setMazeId(res)
    const getMazeId = async data => {
      try {
        setIsLoading(true);
        const res = await UnicornApi.getNewMaze(data);
        setIsLoading(false);
        // update state found in MoveContext with API results of Maze Unique key
        setMazeId(res);
      } catch (e) {
        console.log(e);
      }
    };
    // use the user Game Choices on size, difficulty and name from the SetUp Page and Setup Form to make the API call to receive a NEW MAZE ID
    getMazeId({
      "maze-width": parseInt(gameData.size),
      "maze-height": parseInt(gameData.size),
      "maze-player-name": gameData.name,
      difficulty: parseInt(gameData.difficulty),
    });

  }, [gameData.size, gameData.name, gameData.difficulty, setMazeId]);
  
  
  
  // draws new maze after maze ID changes
  useEffect(() => {
    if (mazeId === "") return;
    const setUpNewMaze = async () => {
      try {
        // res = {} with a unique maze data array, size, difficulty, and starting sprite positions
        const res = await UnicornApi.getMazeCurrentState(mazeId);
        // adds east, south borders + index number to array items
        const completeGridData = addGridCellBorders(res.data, parseInt(gameData.size));
        // update state based on API call result
        setMazeGrid(completeGridData);
        setSpritePositions(getSpritePositions(res));
      } catch (e) {
        console.log(e);
      }
    };
    setUpNewMaze();
  }, [mazeId, setSpritePositions, getSpritePositions, gameData.size]);

  return (
    <>
      <HotKeys>
        <MoveButtons handleMove={handleMove} />
        {isLoading ? (
            <RotatingHorse />
        ) : (
          <div
            className="Maze-grid mx-auto text-center bg-white bg-opacity-80"
            style={gridStyle}
          >
              {mazeGrid.map((gridCell) => {
                return (
                <GridCell
                key={uuid()}
                borders={gridCell.slice(0, gridCell.length)}
                index={gridCell[gridCell.length - 1]}
                spritePositions={spritePositions}
              />            
              )
            })}
          </div>
        )}
      </HotKeys>
    </>    
  );
};

export default MazeGrid;
import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../Context/GameContext";
import UnicornApi from "../../API/UnicornApi";
import { addProps, getSpritePositions } from "./MazeHelpers";
import { v4 as uuid } from "uuid";
import GridCell from "./GridCell";
import MoveButtons from "./Buttons/MoveButtons";
import Keys from "../Hotkeys/Handlers";
import MoveContext from "../../Context/MoveContext";
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
    setSpritePositions
  } = useContext(MoveContext);

  // determines size of maze based on user input saved in context
  const gridStyle = {
    gridTemplateColumns: `repeat(${gameData.size}, minmax(0, 1fr))`
  };

  // starts new game
  useEffect(() => {
    // retrieves maze ID
    const getMazeId = async data => {
      try {
        setIsLoading(true);
        const res = await UnicornApi.getNewMaze(data);
        setIsLoading(false);
        setMazeId(res);
      } catch (e) {
        console.log(e);
      }
    };

    getMazeId({
      "maze-width": parseInt(gameData.size),
      "maze-height": parseInt(gameData.size);
      "maze-player-name": gameData.name,
      difficulty: parseInt(gameData.difficulty),
    });

  }, [gameData.size, gameData.name, gameData.difficulty, setMazeId]);

  // draws new maze after maze ID changes
  useEffect(() => {
    if (mazeId === "") return;
    const setUpNewMaze = async () => {
      try {
        // retrieves array where each array item represents 1 maze grid cell
        const res = await UnicornApi.getMazeCurrentState(mazeId);
        // adds east, south borders + index number to array items
        const completeGridData = addProps(res.data, parseInt(gameData.size));
        // update state based on API call result
        setMazeGrid(completeGridData);
        setSpritePositions(getSpritePositions(res));
      } catch (e) {
        console.log(e);
      }
    };
    setUpNewMaze();
  }, [mazeId, setSpritePositions, gameData.size]);

  
}
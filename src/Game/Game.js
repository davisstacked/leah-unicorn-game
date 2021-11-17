import React, { useContext } from 'react';
import GameContext from '../Context/GameContext';
import SetupPage from "./Pages/Setup/SetupPage";
import MazePage from "./Pages/Maze/MazePage";
import WinPage from "./Pages/Win/WinPage";
import LosePage from './Pages/Lose/LosePage';

import "./Game.css";

const Game = () => {

  const { gameData } = useContext(GameContext);

  return (
    <div>
      {/* based on initial (and updated) game state "gameData" in GameContextProvider */}
      {gameData.status === "setup" && <SetupPage />}
      {gameData.status === "active" && <MazePage />}
      {gameData.status === "won" && <WinPage />}
      {gameData.status === "over" && <LosePage />}
    </div>
  );
};

export default Game;

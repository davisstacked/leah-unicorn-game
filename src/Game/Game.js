import React, { useContext } from 'react';
import GameContext from '../Context/GameContext';
import SetupPage from "./Setup/SetupPage";
import MazeWrapper from "./Maze/MazeWrapper";
import WinPage from "./Win/WinPage";
import LosePage from './Lose/LosePage';

const Game = () => {
  const { gameData } = useContext(GameContext);
  return (
    <div>
      {gameData.status === "setup" && <SetupPage />}
      {gameData.status === "active" && <MazeWrapper />}
      {gameData.status === "won" && <WinPage />}
      {gameData.status === "over" && <LosePage />}
    </div>
  );
};

export default Game;

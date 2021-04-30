import React, { useContext } from 'react';
import GameContext from '../Context/GameContext';
import SetupPage from "./Setup/SetupPage";

const Game = () => {
  const { gameData } = useContext(GameContext);
  return (
    <div>
      {gameData.status === "setup" && <SetupPage />}
    </div>
  );
};

export default Game;

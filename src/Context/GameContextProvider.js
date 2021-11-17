import React, { useState } from "react";
import GameContext from "./GameContext";


const GameContextProvider = ({ children }) => {
  // Start of Game state
  const initialState = {
    status: "setup",
    difficulty: 0,
    size: 15,
    name: "",
  };
  const [gameData, setGameData] = useState(initialState);


  // In GAME.JS the "status" is used to conditionally render SetupPage, MazePage, LosePage, WinPage
  // SetupForm.js when submitted, changes status to "active" and updates GameData to status: "active". 

  // MoveContextProvider.js function checkForGameOver sets gameData.status to either "won" or "over"
  
  // restarts game by setting gameData.status back to "setup"
  const playAgain = () => {
    setGameData({ ...gameData, status: "setup" });
  };

  return (
    <GameContext.Provider value={{
      gameData,
      setGameData,
      playAgain,
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
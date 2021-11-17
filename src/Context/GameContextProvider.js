import React, { useState, useContext } from "react";
import GameContext from "./GameContext";
import AudioContext from './AudioContext'

const GameContextProvider = ({ children }) => {
  // Start of Game state
  const initialState = {
    status: "setup",
    difficulty: 0,
    size: 15,
    name: "Pinkie Pie",
  };
  const [gameData, setGameData] = useState(initialState);

  const [formData, setFormData] = useState(initialState)
  
  const { playGameOver, playGameWon } = useContext(AudioContext);

    // when you submit a form, updates the Game Context with user choices entered into the form. And by changing the status to "active", switches components now to the maze page component. 
    const handleSubmit = (e) => {
      e.preventDefault();
      setGameData({ ...formData, status: "active" });
      setFormData(initialState);
    };
  
  // checks if game is won or lost based on API results. Sets Status to either "won" or "over"
  const checkForGameOver = (res) => {
    if (res.state === 'won') {
      playGameWon();
      setGameData({ ...gameData, status: "won" });
    } else if (res.state === 'over') {
      playGameOver();
      setGameData({ ...gameData, status: 'over' });
    }
  };
  
  // restarts game by setting gameData.status back to "setup"
  const playAgain = () => {
    setGameData({ ...gameData, status: "setup" });
  };

  return (
    <GameContext.Provider value={{
      gameData,
      setGameData,
      playAgain,
      checkForGameOver,
      playGameOver,
      playGameWon,
      formData,
      setFormData,
      initialState,
      handleSubmit
    }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
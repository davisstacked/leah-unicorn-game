import React, { useState, useContext, useEffect } from 'react';
import MoveContext from './MoveContext';
import UnicornApi from '../API/UnicornApi';
import GameContext from './GameContext';
import AudioContext from './AudioContext';

const MoveContextProvider = ({ children }) => {
  const [spritePositions, setSpritePositions] = useState({});
  const { gameData, setGameData } = useContext(GameContext);
  const { playLegal, playIllegal, playGameOver, playGameWon } = useContext(AudioContext);
  const [mazeId, setMazeId] = useState('');

  // sets focus on maze grid to enable hotkeys
  useEffect(() => {
    // if we haven't gotten a unique maze from the API, return.
    if (mazeId === '') return;

    const Maze = document.querySelector("[tabindex='-1']");
    Maze.focus();
  }, [mazeId]);

  // handles move
  const handleMove = (direction) => {
    const move = async (data) => {
      try {
    // returns {} with:
    //   "state": "active" || "over" || "Won"
    //   "state-result": "Move accepted" || "Can't walk in there" "
    // }
        const res = await UnicornApi.makeMove(data, mazeId);
        if (res["state-result"] === "Move accepted") {
          playLegal();
          updatePositions();
        } else {
          playIllegal();
        }
        // 
        checkForGameOver(res);
      } catch (e) {
        console.log(e);
      }
    };
    move({ direction });
  }
  
  
  // updates positions of sprites following a move
  const updatePositions = async () => {
    try {
      const res = await UnicornApi.getMazeCurrentState(mazeId);
      setSpritePositions(getSpritePositions(res));
    } catch (e) {
      console.log(e);
    }
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

  // retrieves sprites positions (unicorn, monster, end) from API call result
// The full API call includes the maze etc.
// This function simplifies our object to only sprite positions. 
const getSpritePositions = (res) => {
  return {
    end: res['end-point'][0],
    monster: res.domokun[0],
    unicorn: res.pony[0],
  };
};
  
    
  return (
    <MoveContext.Provider
      value={{
        handleMove,
        updatePositions,
        mazeId,
        setMazeId,
        spritePositions,
        setSpritePositions,
        getSpritePositions
      }}
    >
      {children}
    </MoveContext.Provider>
  )
};

export default MoveContextProvider;








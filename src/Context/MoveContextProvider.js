import React, { useState, useContext, useEffect } from 'react';
import MoveContext from './MoveContext';
import UnicornApi from '../API/UnicornApi';
import GameContext from './GameContext';
import AudioContext from './AudioContext';
import { getSpritePositions } from '../Game/Maze/MazeHelpers';

const MoveContextProvider = ({ children }) => {
  const [spritePositions, setSpritePositions] = useState({});
  const { gameData, setGameData } = useContext(GameContext);
  const { playLegal, playIllegal, playGameOver, playGameWon } = useContext(AudioContext);
  const [mazeId, setMazeId] = useState('');

  // sets focus on maze grid to enable hotkeys
  useEffect(() => {
    if (mazeId === '') return;
    const Maze = document.querySelector("[tabindex='-1']");
    Maze.focus();
  }, [mazeId]);

  // handles move
  const handleMove = (direction) => {
    const move = async (data) => {
      try {
        const res = await UnicornApi.makeMove(data, mazeId);
        if (res["state-result"] === "Move accepted") {
          playLegal();
          updatePositions();
        } else {
          playIllegal();
        }
        checkForGameOver(res);
      } catch (e) {
        console.log(e);
      }
    };
    move({ direction });
  }
}

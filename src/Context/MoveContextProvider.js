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

  

}

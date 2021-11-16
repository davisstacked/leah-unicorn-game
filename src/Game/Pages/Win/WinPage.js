import React, { useContext } from "react";
import GameContext from "../../../Context/GameContext";
import { useHistory } from "react-router-dom";
import WinUnicornImage from "./WinUnicornImage";

import "./WinPage.css";

const WinPage = () => {
  const { playAgain } = useContext(GameContext);
  const history = useHistory();

  const handlePlayAgain = () => {
    playAgain();
    history.push("/");
  };

  return (
    <>
      <div className="win-page text flex flex-col justify-evenly items-center p-10 h-screen">
        <h1 className="text-white text-4xl gradient-pink text-center shadow-xl px-1 py-2 border-2 border-purple-700 rounded">
          Woah! A <span className="text-black font-semibold">RAINBOW</span>! 
        </h1>
        <p className="text-3xl text-white text-center shadow-xl px-1 py-2 border-2 border-purple-700 rounded gradient-pink">
          You did it!!
        </p>
        <WinUnicornImage />
        <button
          className="game-button font-bold text-3xl shadow-xl hover:text-white py-2 px-3 border-2 border-purple-700 gradient-pink"
          onClick={handlePlayAgain}
        >
          Play Again!
        </button>
      </div>
    </>
  );
};

export default WinPage;
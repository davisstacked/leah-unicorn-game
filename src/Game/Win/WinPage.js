import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
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
      <div className="win-page flex flex-col justify-evenly items-center p-10 h-screen">
        <h1 className="text text-center shadow-xl px-1 border-2 border-purple-700 rounded gradient-pink">
          Woah! A <span className="text-pink-600 font-semibold">RAINBOW</span>! You did it!!
        </h1>
        <WinUnicornImage />
        <button
          className="game-button shadow-xl hover:text-white py-2 px-3 border-2 border-purple-700 gradient-pink text text-3xl"
          onClick={handlePlayAgain}
        >
          Play Again!
        </button>
      </div>
    </>
  );
};

export default WinPage;
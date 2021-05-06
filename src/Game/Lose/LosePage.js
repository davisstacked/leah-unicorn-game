import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import LittleDeath from "../Lose/LittleDeath";
import { useHistory } from "react-router-dom";

import "./LosePage.css";

const LosePage = () => {
  const { playAgain } = useContext(GameContext);
  const history = useHistory();

  const handlePlayAgain = () => {
    playAgain();
    history.push("/");
  };

  return (
    <div className="lose-page flex flex-col justify-evenly text-center items-center p-10 h-screen">
      <div className="leading-10 sm:leading-normal text flex flex-col text-xl text-center shadow-sm py-2 px-3 border-2 border-purple-700 rounded gradient-pink">
        <h1>
          Woah! You Freakin' <span className="text-pink-600 font-semibold">DIED</span>!!! <i className="far fa-sad-cry fa-lg"></i>
        </h1>
        <p>
          Don't Worry!
        </p>
        <p>It happens to The Best of Us - even the <span className="text-pink-600 font-semibold">UNICORNS</span>! </p>
      </div>
      <LittleDeath />
      <button
        className="game-button shadow-sm text-black text-3xl py-2 px-3 border-2 border-purple-700 rounded gradient-pink hover:text-white"
        onClick={handlePlayAgain}
      >
        Play Again?
      </button>
    </div>
  );
};

export default LosePage;

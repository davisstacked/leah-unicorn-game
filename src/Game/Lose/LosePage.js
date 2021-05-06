import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import LittleDeath from "../Lose/LittleDeath";
import { useHistory } from "react-router-dom";

const LosePage = () => {
  const { playAgain } = useContext(GameContext);
  const history = useHistory();

  const handlePlayAgain = () => {
    playAgain();
    history.push("/");
  };

  return (
    <div className="flex flex-col justify-evenly text-center items-center p-10 h-screen">
      <div className="leading-loose sm:leading-relaxed text flex flex-col text-xl text-center">
        <h1>
          Woah! You <span className="text-pink-600 font-semibold">DIED</span>! <i className="far fa-sad-cry fa-lg"></i>
        </h1>
        <p>
          Don't Worry!
        </p>
        <p>It happens to The Best of Us - even the <span className="text-pink-600 font-semibold">UNICORNS</span> </p>
      </div>
      <LittleDeath />
      <button
        className="shadow-sm text-white py-2 px-3 border-2 border-purple-700 rounded gradient-pink font-mono hover:shadow-xl hover:text-black"
        onClick={handlePlayAgain}
      >
        Play Again?
      </button>
    </div>
  );
};

export default LosePage;

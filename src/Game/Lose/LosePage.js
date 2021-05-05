import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Skull from "../Setup/SmallSkull";
import { useHistory } from "react-router-dom";

const LosePage = () => {
  const { playAgain } = useContext(GameContext);
  const history = useHistory();

  const handlePlayAgain = () => {
    playAgain();
    history.push("/");
  };

  return (
    <div className="flex flex-col justify-evenly items-center p-10 h-screen">
      <div className="font-mono text-xl text-center">
        You lost!
      </div>
      <Skull />
      <button
        className="shadow-xl py-2 px-3 border-2 border-purple-700 rounded gradient-pink font-mono"
        onClick={handlePlayAgain}
      >
        Restart
      </button>
    </div>
  );
};

export default LosePage;

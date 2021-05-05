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
        <div className="font-mono text-xl text-center">
          You reached the rainbow!
        </div>
        <WinUnicornImage />
        <button
          className="hover:shadow-md hover:border-8 py-2 px-3 border-2 border-purple-700 rounded bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-mono"
          onClick={handlePlayAgain}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default WinPage;
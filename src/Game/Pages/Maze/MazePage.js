import React, { useContext } from "react";
import GameContext from "../../../Context/GameContext";
import MazeGrid from "./Grid/MazeGrid";
import classNames from "classnames";
import { ArrowBendUpLeft } from "phosphor-react";

const MazePage = () => {
  const { gameData, playAgain } = useContext(GameContext);

  // Conditionally sizes the maze (responsive design with tailwindCSS) based on gameData.size. external library classNames allows for simple conditional rendering. 
  const mazeWidthClasses = classNames({
    "mx-auto p-3": true,
    "sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12": gameData.size <= 17,
    "md:w-8/12 lg:w-6/12 xl:w-5/12": gameData.size > 17 && gameData.size <= 20,
    "md:w-10/12 lg:w-7/12 xl:w-6/12": gameData.size > 20 && gameData.size <= 23,
    "md:w-11/12 lg:w-10/12 small-cell": gameData.size > 23,
  });

  return (
    <div className="bg-clouds h-fill md:h-screen">
      <div className="flex flex-col justify-center items-center font-mono text-center">
        <h2 className="text-2xl pt-5">
          Help <span className="text-pink-600">{gameData.name.toUpperCase()}</span> reach the <span className="text-pink-600">RAINBOW</span>!
        </h2>
        <h5>Move using arrow keys, WASD or buttons.</h5>
        <p className="text-sm pb-2">
          <ArrowBendUpLeft className="inline" size={24} />
          Back to {" "}
          <button onClick={playAgain} className="underline text-pink-600">
            setup
          </button>
        </p>
        <div className={mazeWidthClasses}>
          <MazeGrid />
          <div className="flex mt-2 justify-between items-center">
            <span className="self-start mx-4 gradient-pink text-white p-1 px-3 rounded shadow-xl border-2">Difficulty: {gameData.difficulty}</span>
            <span className="mx-4 gradient-pink text-white p-1 px-3 rounded shadow-xl border-2">Size: {gameData.size}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MazePage;
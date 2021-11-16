import React, { useContext } from "react";
import MoveContext from "../../../../../Context/MoveContext";

const Button = ({ children, direction }) => {
  const { handleMove } = useContext(MoveContext);
  return (
    <button
      className="mx-4 bg-gradient-to-r from-purple-400 via-pink-500 to--500 border-blue-600 text-white p-1 px-3 rounded shadow-xl border-2 mb-2"
      onClick={() => handleMove(direction)}
    >
      {children}
    </button>
  );
};

export default Button;
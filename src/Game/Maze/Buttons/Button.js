import React, { useContext } from "react";
import MoveContext from "../../../Context/MoveContext";

const Button = ({ children, direction }) => {
  const { handleMove } = useContext(MoveContext);
  return (
    <button
      onClick={() => handleMove(direction)}
    >
      {children}
    </button>
  );
};

export default Button;
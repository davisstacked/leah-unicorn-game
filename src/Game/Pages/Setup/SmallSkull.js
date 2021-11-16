import React from "react";
import TinySkull from "../../../Assets/Imgs/skullMonster.png";
import ReactFloaterJs from "react-floaterjs";

const SmallSkull = () => {
  return (
    <ReactFloaterJs>
      <img src={TinySkull} alt="floating rose skull" className="pb-4 sm:pb-0 h-32 sm:h-40" />
    </ReactFloaterJs>
  );
};

export default SmallSkull;
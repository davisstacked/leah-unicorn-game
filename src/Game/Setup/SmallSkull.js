import React from "react";
import TinySkull from "../../Assets/Imgs/skullMonster.png";
import ReactFloaterJs from "react-floaterjs";

const SmallSkull = () => {
  return (
    <ReactFloaterJs>
      <img src={TinySkull} alt="floating rose skull" className="h-40" />
    </ReactFloaterJs>
  );
};

export default SmallSkull;